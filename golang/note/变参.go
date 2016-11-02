package main

import (
	"fmt"
)

func myfunc(arg ...int) {
	for _, v := range arg {
		fmt.Printf("the Number is: %d\n", v)
	}
}

func main() {
	myfunc()
}
