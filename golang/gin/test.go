package main

import (
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})
	r.Run()
}

/*
*启动服务， 默认端口8080
*可以传入字符串固定自定义端口r.Run(":3000")
 */
