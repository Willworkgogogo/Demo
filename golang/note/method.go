package main

import (
	"fmt"
	"math"
)

//函数的另一种形态，带有接受者的函数，method
func main() {
	r1 := Rectangle{12, 2}
	r2 := Rectangle{9, 4}
	c1 := Circle{10}

	fmt.Println("Area of r1 is:", r1.area())
	fmt.Println("Area of r2 is:", r2.area())
	fmt.Println("Area of c1 is:", c1.area())
}

type Rectangle struct {
	width, height float64
}

type Circle struct {
	radius float64
}

func (r Rectangle) area() float64 {
	return r.width * r.height
}

func (c Circle) area() float64 {
	return c.radius * c.radius * math.Pi
}
