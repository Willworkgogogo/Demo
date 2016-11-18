package main

import (
	"config"

	"web/map.smm.cn/src/handler"

	"github.com/gin-gonic/gin"
	"github.com/robvdl/pongo2gin"
)

func init() {
	// 初始化配置文件
	config.DefaultConfig.Init()
}

func startGin() {
	router := gin.Default()

	router.HTMLRender = pongo2gin.New(pongo2gin.RenderOptions{
		TemplateDir: "templates/",
		ContentType: "text/html; charset=utf-8",
	})

	router.Static("/static", "./static")

	//    router
	var mapController = handler.Map{}

	router.GET("/", mapController.Index)

	//从tag传入
	router.GET("/tag/:province/:item/:page/:pagelimit/:sort", mapController.GetCategoryItem)

	// 从二三级菜单传入
	router.GET("/category/:province/:item/:page/:pagelimit/:sort", mapController.GetProvinceItem)

	// 获取地图数据
	router.GET("/map/:item/:type", mapController.GetMap)

	// 测试接口
	router.GET("/getMap")

	router.Run(":" + config.DefaultConfig.Port)
}
