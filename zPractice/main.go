// aabbbccccc=> 2a3b5c

package main

import (
	"fmt"
	"strconv"
)

func main() {
	// var aRune rune = 'a'
	// fmt.Printf("Unicode Code point of %c\n", aRune)
	// encode1("aab bbccccc")
	encodec("aabbbccccc")
}

// [{key:a,count:2},{key:b,count:3,{key:c,count:5}]
type keyObject struct {
	key   string
	count int
}

func encode1(input string) string {
	stringArray := []string{}
	newObjArray := []keyObject{}

	for _, char := range input {
		stringArray = append(stringArray, string(char))
	}
	count := 1
	for i := range stringArray {
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
	// temp := make(map[string]int)
	temp := map[string]int{}
	//{key:count,key:count,key:count}  => {a:2,b:3,c:5}
	count := 1

	for i := 0; i < len(input); i++ {
		// if i = lastIndex || currValue != nextValue
		if i == len(input)-1 || input[i] != input[i+1] {
			char := string(input[i])
			temp[char] = count
			count = 1
		} else {
			count++
		}
	}

	var res string
	for k, c := range temp {
		res += strconv.Itoa(c) + k
	}
	fmt.Println(res)
	return res
}
