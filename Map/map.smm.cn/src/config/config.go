package config

import "github.com/smmit/smmbase/config_reader"

// Static  静态文件
type Static struct {
	UrlPrefix string `json:"url_prefix"`
	Version   string `json:"version"`
}

type Config struct {
	Port   string `json:"port"`
	Static Static `json:"static_conf"`
	Host   string

	GetMap      string `json:"get_map"`
	GetItem     string `json:"get_item"`
	GetCategory string `json:"get_category"`
}

var DefaultConfig Config

//Init 初始化默认配置文件
func (c *Config) Init() {
	err := config_reader.ReadConfig(c)
	if err != nil {
		panic(err)
	}
}
