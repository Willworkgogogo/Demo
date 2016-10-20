package main

//匿名字段，结构体继承
import (
	"fmt"
)

func main() {
	//初始化一个学生
	mark := Student{Human{"Mark", 20, 140}, "Computer Science"}

	//访问相应的字段
	fmt.Println("His name is", mark.name)
	fmt.Println("His age is", mark.age)
	fmt.Println("His weight is", mark.weight)
	fmt.Println("His speciality is", mark.speciality)

	//修改年龄
	mark.age = 50
	fmt.Println("His age is", mark.age)
}

type Human struct {
	name   string
	age    int
	weight int
}

type Student struct {
	Human //go语言支持只提供类型，而不写字段名的方式，也就是匿名字段，或者叫嵌入字段
	//默认的Student就包含了Human里的所有字段
	speciality string
}
