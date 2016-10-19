package main

/*
*路径参数配置
 */
import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func main() {
	router := gin.Default()

	// This handler will match /user/john but will not match neither /user/ or /user
	//路径参数
	//这个处理器会匹配/user/john  但是不会匹配/user/ 和 /user这两种情况
	router.GET("/user/:name", func(c *gin.Context) {
		name := c.Param("name")
		c.String(http.StatusOK, "Hello %s", name)
	})

	// However, this one will match /user/john/ and also /user/john/send
	//然而，下面这种情况可以匹配这两种路径情况 /user/jhon 和 /user/jhon/send
	// If no other routers match /user/john, it will redirect to /user/john/
	//如果没有其他路由匹配这个路径 /user/jhon, 它会重新指向 /user/jhon/ 这个路径
	router.GET("/user/:name/*action", func(c *gin.Context) {
		name := c.Param("name")
		action := c.Param("action")
		message := name + " is " + action
		c.String(http.StatusOK, message)
	})

	router.Run(":8080")
}
