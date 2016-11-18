package service

import (
	"errors"
	"fmt"

	"config"
	"model"
)

//GetItem  获取条目信息
func GetItem(province, category, page, pageLimit, sort string) (*model.WrapItem, error) {
	var url = fmt.Sprintf(config.DefaultConfig.GetItem, category, page, pageLimit, sort, province)
	var data model.WrapItem
	fmt.Println(url)
	err := GetData(url, &data, "GetItem error")
	if err != nil {
		return nil, errors.New("连接失败！")
	}
	if data.Code != STATUS_SUCCESS {
		return nil, errors.New("获取数据内容错误！")
	}
	return &data, nil
}

// GetCategory 获取分类信息
func GetCategory(province, category, page, pageLimit, sort string) (*model.WrapItem, error) {
	var url = fmt.Sprintf(config.DefaultConfig.GetCategory, category, page, pageLimit, sort, province)
	var data model.WrapItem
	fmt.Println(url)
	err := GetData(url, &data, "GetItem error")
	if err != nil {
		return nil, errors.New("连接失败！")
	}
	if data.Code != STATUS_SUCCESS {
		return nil, errors.New("获取数据内容错误！")
	}
	return &data, nil
}
