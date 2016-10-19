package main

import (
	"github.com/gin-gonic/gin"
)

func main() {
	// Creates a gin router with default middleware:
	// logger and recovery (crash-free) middleware
	router := gin.Default()

	// router.GET("/someGet", getting)
	// router.POST("/somePost", posting)
	// router.PUT("/somePut", putting)
	// router.DELETE("/someDelete", deleting)
	// router.PATCH("/somePatch", patching)
	// router.HEAD("/someHead", head)
	// router.OPTIONS("/someOptions", options)
	router.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message":  "hello",
			"message2": "world",
		})
	})
	// By default it serves on :8080 unless a
	// PORT environment variable was defined.
	router.Run()
	// router.Run(":3000") for a hard coded port
}

/*
*只有GET方法才能在页面上输出信息
 */
