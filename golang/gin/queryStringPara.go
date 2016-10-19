package main

/*
*查询字符串参数
 */
import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func main() {
	router := gin.Default()

	// Query string parameters are parsed using the existing underlying request object.
	//查询字符串参数 可以理解为
	// The request responds to a url matching:  /welcome?firstname=Jane&lastname=Doe
	//通过url地址实现请求回复
	router.GET("/welcome", func(c *gin.Context) {
		firstname := c.DefaultQuery("firstname", "Guest")
		lastname := c.Query("lastname") // 简写shortcut for c.Request.URL.Query().Get("lastname")

		c.String(http.StatusOK, "Hello %s %s", firstname, lastname)
	})
	router.Run(":8080")
}
