package handler

import (
	"net/http"

	"config"
	"service"

	"github.com/flosch/pongo2"
	"github.com/gin-gonic/gin"
)

type Map struct {
}

func (m Map) Index(c *gin.Context) {
	context := make(pongo2.Context)

	context["static"] = config.DefaultConfig.Static
	c.HTML(http.StatusOK, "index.html", context)
}

// GetMap  获取某分类下的地图数据       /map/:item/:type
func (m Map) GetMap(c *gin.Context) {
	category := c.Param("item")
	tp := c.Param("type")
	data, err := service.GetMap(category, tp)
	if err != nil {
		c.JSON(http.StatusOK, map[string]interface{}{
			"code":    100001,
			"message": err.Error(),
		})
		return
	}
	c.JSON(http.StatusOK, data)
}

//GetCategoryItem 获取某分类下的信息，    tag/:item/:page/:pagelimit/:sort
func (m Map) GetCategoryItem(c *gin.Context) {
	category := c.Param("item")
	page := c.Param("page")
	pagelimit := c.Param("pagelimit")
	sort := c.Param("sort")
	province := c.Param("province")
	if province == "all" {
		province = ""
	}
	data, err := service.GetCategory(province, category, page, pagelimit, sort)
	if err != nil {
		c.JSON(http.StatusOK, map[string]interface{}{
			"code":    100001,
			"message": err.Error(),
		})
		return
	}
	c.JSON(http.StatusOK, data)
}

// GetProvinceItem /category/:province/:item/:page/:pagelimit/:sort
func (m Map) GetProvinceItem(c *gin.Context) {
	province := c.Param("province")
	if province == "all" {
		province = ""
	}
	category := c.Param("item")
	page := c.Param("page")
	pagelimit := c.Param("pagelimit")
	sort := c.Param("sort")
	data, err := service.GetItem(province, category, page, pagelimit, sort)
	if err != nil {
		c.JSON(http.StatusOK, map[string]interface{}{
			"code":    100001,
			"message": err.Error(),
		})
		return
	}
	c.JSON(http.StatusOK, data)
}
