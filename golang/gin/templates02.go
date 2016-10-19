package main

//loadHTMLGlob渲染模板

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func main() {
	router := gin.Default()
	router.LoadHTMLGlob("templates/*")
	//或者用LoadHTMLFiles加载，写法：LoadHTMLFiles("templates/title.html","templates/name.html",...)
	router.GET("/index", func(c *gin.Context) {
		c.HTML(http.StatusOK, "title.html", gin.H{
			"title": "Main website",
		})
	})
	router.Run(":8080")
}
