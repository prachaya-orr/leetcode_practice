// aabbbccccc=> 2a3b5c

package main

import (
	"fmt"
	"strconv"
)

func main() {
	// var aRune rune = 'a'
	// fmt.Printf("Unicode Code point of %c\n", aRune)
	encode("aabbbccccc")
	encodec("aabbbccccc")
}

// [{key:a,count:2},{key:b,count:3,{key:c,count:5}]
type keyObject struct {
	key   string
	count int
}

func encode(input string) string {
	stringArray := []string{}
	newObjArray := []keyObject{}

	for _, char := range input {
		stringArray = append(stringArray, string(char))
	}
	count := 1
	for i := 0; i < len(stringArray); i++ {
		if i == len(stringArray)-1 || stringArray[i] != stringArray[i+1] {
			val := keyObject{key: stringArray[i], count: count}
			count = 1
			newObjArray = append(newObjArray, val)
		} else {
			count++
		}
	}
	var res string
	for _, v := range newObjArray {
		res += strconv.Itoa(v.count) + v.key
	}

	fmt.Println(res)
	return res
}

func encodec(input string) string {
	temp := make(map[string]int)

	count := 1

	for i := 0; i < len(input); i++ {
		// if i = lastIndex || currValue != nextValue
		if i == len(input)-1 || input[i] != input[i+1] {
			fmt.Println("i == len(input)-1 : ", i == len(input)-1, len(input)-1, ",i :", i)
			// fmt.Println("input[i] != input[i+1] : ", input[i] != input[i+1])
			fmt.Printf("if loop   : i is %v, value is %v, count is %v\n", i, string(input[i]), count)
			temp[string(input[i])] = count
			count = 1
		} else {
			count = count + 1
			fmt.Printf("else loop : i is %v, value is %v, count is %v\n", i, string(input[i]), count)
		}
	}

	var res string
	for t, c := range temp {
		res += strconv.Itoa(c) + t
	}
	fmt.Println(res)
	return res
}
