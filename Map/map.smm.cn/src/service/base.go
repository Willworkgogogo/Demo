package service

import (
	"crypto/tls"
	"encoding/json"
	"errors"
	"fmt"
	"io/ioutil"
	"net"
	"net/http"
	"time"
)

// DefaultClient   for  https
var DefaultClient = &http.Client{
	Transport: &http.Transport{
		TLSClientConfig:    &tls.Config{InsecureSkipVerify: true},
		DisableCompression: true,
		Dial: func(netw, addr string) (net.Conn, error) {
			client, err := net.DialTimeout(netw, addr, time.Second*3)
			if err != nil {
				return nil, err
			}
			client.SetDeadline(time.Now().Add(time.Second * 5))
			return client, nil
		},
		ResponseHeaderTimeout: time.Second * 3,
	},
}

// SendHTTPRequestGet 发送HTTP请求---GET
func SendHTTPRequestGet(url string, headers map[string]string) ([]byte, error) {
	if headers == nil {
		res, err := http.Get(url)
		if err != nil {
			return nil, err
		}
		defer res.Body.Close()
		return ioutil.ReadAll(res.Body)
	}
	request, _ := http.NewRequest("GET", url, nil)
	for k, v := range headers {
		request.Header.Set(k, v)
	}
	response, err := DefaultClient.Do(request)
	if err != nil {
		return nil, err
	}
	defer response.Body.Close()
	if response.StatusCode != 200 {
		return nil, err
	}
	return ioutil.ReadAll(response.Body)
}

// GetData  封装获取数据
func GetData(url string, data interface{}, errinfo string) error {
	// 设置重链接次数
	var TryTimes func(int) ([]byte, error)

	TryTimes = func(times int) (body []byte, err error) {
		if times <= 0 {
			fmt.Println("连续连接失败！")
			return nil, errors.New(errinfo + ",连接API失败！")
		}
		body, err = SendHTTPRequestGet(url, nil)
		if err == nil {
			return body, nil
		}
		time.Sleep(100 * time.Millisecond)
		return TryTimes(times - 1)
	}

	// 重连
	body, err := TryTimes(1)
	if err != nil {
		return errors.New(errinfo + ",连接API失败！")
	}
	// 数据转化
	err = json.Unmarshal(body, data)
	if err != nil {
		fmt.Println(errinfo, "数据转化失败", err)
		return errors.New(errinfo + "，数据转化失败,错误信息：" + err.Error())
	}
	return nil
}
