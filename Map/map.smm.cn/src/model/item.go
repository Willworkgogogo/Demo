package model

type Item struct {
	CompanyInfo  CompanyInfo    `json:"company_info"`
	ProductInfos []ProductInfos `json:"product_infos"`
}

type CompanyInfo struct {
	ID             int    `json:"id"`
	Province       string `json:"province"`
	City           string `json:"city"`
	Name           string `json:"name"`
	Address        string `json:"address"`
	SecurityStatus int    `json:"security_status"`
	SecurityCode   string `json:"security_code"`
	MineInfo       string `json:"mine_info"`
}

type ProductInfos struct {
	ID             int         `json:"id"`
	CompanyID      int         `json:"company_id"`
	Date           string      `json:"date"`
	Type           string      `json:"type"`
	ProductID      int         `json:"product_id"`
	Quantity       interface{} `json:"quantity"`
	Unit           interface{} `json:"unit"`
	AdditionalInfo interface{} `json:"additional_info"`
}

type WrapItem struct {
	Code    int    `json:"code"`
	Message string `json:"message"`
	Data    []Item `json:"data"`
}
