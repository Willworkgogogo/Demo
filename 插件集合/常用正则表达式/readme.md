## 去除空格
    * $(".new-cellphone").val().replace(/(^\s+)|(\s+$)/g,"")；
    * 去除空格
## 手机验证
    * /^1\d{10}$/.test(cellphone))
    * 手机号满足1开头， 共11位数
    * 用例：if (cellphone != "" && (/^1\d{10}$/.test(cellphone))) {}
