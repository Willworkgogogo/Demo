package main

func myFunc() {
	i := 0
Here: //goto必须跳转到在当前函数内定义的标签
	println(i)
	i++
	goto Here
}

func main() {
	myFunc() //这是个死循环，编辑器会崩溃
}
