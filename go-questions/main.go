package main

import (
	"fmt"
	"strings"
	"unicode"
)

func wordFrequency(text string) map[string]int {
	var cleanedText string
	for _, char := range text {
		if unicode.IsLetter(char) || unicode.IsSpace(char) {
			cleanedText += string(unicode.ToLower(char))
		}
	}

	words := strings.Fields(cleanedText)
	wordCount := make(map[string]int)
	for _, word := range words {
		wordCount[word]++
	}

	return wordCount
}

func main() {
	text := "Four, One two two three Three three four  four   four"
	result := wordFrequency(text)

	// Print the result
	for word, count := range result {
		fmt.Printf("%s => %d\n", word, count)
	}
}
