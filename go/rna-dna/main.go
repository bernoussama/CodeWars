package rnadna

import "strings"

func DNAtoRNA(dna string) string {
	// rna := ""
	// for _, rune := range dna {
	// 	if rune == 'T' {
	// 		rna += "U"
	// 	} else {
	// 		rna += string(rune)
	// 	}
	// }
	rna := strings.ReplaceAll(dna, "T", "U")
	return rna
}
