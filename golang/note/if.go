package main

import (
	"fmt"
)

func main() {
	if x := 101; x > 100 {
		fmt.Printf("%d > 100", x)
	} else {
		fmt.Printf("%d < 100\n", x)
	}
}

/*
*可以在if语句中声明变量
*有块作用域概念，if条件判断中声明的变量只能在该{}作用域中有效
*在外部使用fmt.Println(x)会报错
 */
