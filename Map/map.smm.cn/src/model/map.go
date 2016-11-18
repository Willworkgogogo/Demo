package model

type Map struct {
	Addr   string `json:"province"`
	Number int    `json:"count"`
}

type WrapMap struct {
	Code    int    `json:"code"`
	Message string `json:"message"`
	Data    []Map  `json:"data"`
}
