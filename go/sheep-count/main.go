package main

import (
	"fmt"
	"strings"
)

func countSheep(num int) string {
	//    var str string // initialized to ""
	// for i := 1; i <= num; i++ {
	// 	str += fmt.Sprintf("%d sheep...", i)
	// }
	var str strings.Builder

	for i := 1; i <= num; i++ {
		fmt.Fprintf(&str, "%d sheep...", i)
	}

	return str.String()
}
