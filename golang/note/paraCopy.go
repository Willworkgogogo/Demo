package main

import "fmt"

func add(a int) int {
	a = a + 1
	return a
}

func main() {
	x := 3

	fmt.Println("x = ", x)

	newX := add(x) //调用函数，传入实参

	fmt.Println("newX = ", newX) //newX输出值为4
	fmt.Println("x =", x)        //x的输出值依然为3，并没有被函数体操作影响
}
