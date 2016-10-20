package main

import (
	"fmt"
)

//比较两个年龄大小，并返回年龄大者，以及年龄差
func main() {
	tom := person{name: "Tom", age: 18}
	bob := person{"Bob", 28}
	paul := person{"Paul", 38}

	tb_older, tb_diff := Older(tom, bob)
	tp_older, tp_diff := Older(tom, paul)
	bp_older, bp_diff := Older(bob, paul)

	fmt.Printf("%s and %s, %s is older by %d years\n", tom.name, bob.name, tb_older.name, tb_diff)
	fmt.Printf("%s and %s, %s is older by %d years\n", tom.name, paul.name, tp_older.name, tp_diff)
	fmt.Printf("%s and %s, %s is older by %d years\n", paul.name, bob.name, bp_older.name, bp_diff)
}

//声明一个新的类型
type person struct {
	name string
	age  int
}

//比较年龄,返回年龄差
func Older(p1, p2 person) (person, int) {
	if p1.age > p2.age {
		return p1, p1.age - p2.age
	} else {
		return p2, p2.age - p1.age
	}
}
