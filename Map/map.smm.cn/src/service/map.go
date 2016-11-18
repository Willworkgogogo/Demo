package service

import (
	"errors"
	"fmt"

	"config"

	"model"
)

var (
	STATUS_SUCCESS = 100000
)

// GetMap  获取地图信息
func GetMap(category, tp string) (*model.WrapMap, error) {
	var url string
	if tp == "" || tp == "0" {
		url = fmt.Sprintf(config.DefaultConfig.GetMap, "category="+category)
	} else {
		url = fmt.Sprintf(config.DefaultConfig.GetMap, "product="+category)
	}
	fmt.Println("map url:", url)
	var data model.WrapMap
	err := GetData(url, &data, "GetMap error")
	if err != nil {
		return nil, errors.New("连接失败！")
	}
	if data.Code != STATUS_SUCCESS {
		return nil, errors.New("获取数据内容错误！")
	}
	return &data, nil
}
