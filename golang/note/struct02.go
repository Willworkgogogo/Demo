package main

//struct不仅能将struct作为匿名字段，自定义类型、内置类型都可以作为匿名字段，而且可以在相应的字段上进行函数操作，如append
import "fmt"

func main() {
	bob := Employee{Human{"Bob", 18, "123456"}, "Computer", "0987654"}
	fmt.Println("Bob's work phone is:", bob.phone)
	//访问Human的Phone字段
	fmt.Println("Bob's personal phone is:", bob.Human.phone)
}

type Human struct {
	name  string
	age   int
	phone string
}

type Employee struct {
	Human
	speciality string
	phone      string
}
