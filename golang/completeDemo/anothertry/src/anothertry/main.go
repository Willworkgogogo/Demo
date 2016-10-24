package main

import (
	"log"
	"net/http"

	"github.com/flosch/pongo2"
	"github.com/gin-gonic/gin"
	"github.com/robvdl/pongo2gin"
	"github.com/smmit/smmbase/config_reader"
)

type ServerListen struct {
	Host string `json:"host"`
	Port string `json:"port"`
}

type StaticConf struct {
	UrlPrefix string `json:"url_prefix"`
	Version   string `json:"version"`
}

type Config struct {
	PublicListen ServerListen `json:"public_listen"`
	ServeStatic  bool         `json:"serve_static"`
	StaticServer StaticConf   `json:"static_server"`
}

var config Config

func main() {
	err := config_reader.ReadConfig(&config)
	if err != nil {
		log.Println(err.Error())
	}

	log.Printf("Configuration: \n%+v\n", config)

	r := gin.Default()
	r.HTMLRender = pongo2gin.Default()

	if config.ServeStatic {
		r.Static(config.StaticServer.Version, "./static")
	}

	r.GET("/", homepage)
	r.GET("/hiring", hiring)
	r.GET("/process", process)

	r.Run(config.PublicListen.Host + ":" + config.PublicListen.Port)
}

func homepage(c *gin.Context) {

	c.HTML(http.StatusOK, "homepage.html", pongo2.Context{
		"static_server_path": config.StaticServer,
	})
}

func hiring(c *gin.Context) {

	c.HTML(http.StatusOK, "hiring.html", pongo2.Context{
		"static_server_path": config.StaticServer,
	})
}

func process(c *gin.Context) {

	c.HTML(http.StatusOK, "process.html", pongo2.Context{
		"static_server_path": config.StaticServer,
	})
}
