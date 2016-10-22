package main

import "fmt"

func add(a *int) int {
	*a = *a + 1
	return *a
}

func main() {
	x := 3
	fmt.Println("x = ", x)

	x1 := add(&x)

	fmt.Println("x1 = ", x1) //此时x1输出的值是4
	fmt.Println("x = ", x)   //x的值也变为了4，达到了修改变量x值的目的
}
