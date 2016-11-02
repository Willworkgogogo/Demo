package main

import (
	"fmt"
)

func main() {
	hello := map[string]float32{"A": 30, "B": 40, "C": 50}
	// fmt.Println(hello)
	look, ok := hello["D"]
	if ok {
		fmt.Println(look)
	} else {
		fmt.Println("oh no")
	}

	see, ok := hello["A"]
	if ok {
		fmt.Println(see)
	} else {
		fmt.Println("oh no")
	}
}
