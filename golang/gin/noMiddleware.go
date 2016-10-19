package main

//不使用中间件，使用gin默认配置创建路由 即使用router := gin.New()来代替 router := gin.Default()
import (
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.New()

	// Global middleware
	//全局中间件
	r.Use(gin.Logger())
	r.Use(gin.Recovery())

	// Per route middleware, you can add as many as you desire.
	//可以根据需要添加任意多的中间件
	r.GET("/benchmark", MyBenchLogger(), benchEndpoint)

	// Authorization group
	// authorized := r.Group("/", AuthRequired())
	// exactly the same as:
	authorized := r.Group("/")
	// per group middleware! in this case we use the custom created
	// AuthRequired() middleware just in the "authorized" group.
	//AuthRequired()中间件
	authorized.Use(AuthRequired())
	{
		authorized.POST("/login", loginEndpoint)
		authorized.POST("/submit", submitEndpoint)
		authorized.POST("/read", readEndpoint)

		// nested group
		//嵌套路由组
		testing := authorized.Group("testing")
		testing.GET("/analytics", analyticsEndpoint)
	}

	// Listen and server on 0.0.0.0:8080
	r.Run(":8080")
}
