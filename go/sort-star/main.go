package main

import (
	"fmt"
	"sort"
	"strings"
)

func TwoSort(arr []string) string {
	// slices.Sort[[]string](arr)
	sort.Strings(arr)
	str := strings.Join(strings.Split(arr[0], ""), "***")
	return str
}

func main() {
	s := []string{"bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"}
	str := TwoSort(s)
	fmt.Println(str)
}
