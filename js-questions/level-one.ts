function titleCase(str: string): string {
  return str
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Test cases
console.log(titleCase("I'm a little tea pot")); // "I'm A Little Tea Pot"
console.log(titleCase("sHoRt AnD sToUt"));      // "Short And Stout"
console.log(titleCase("SHORT AND STOUT"));      // "Short And Stout"