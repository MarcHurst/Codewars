const solution = (string = "Stringtest", endsWith = "test") => (string.substring(string.length-endsWith.length) === endsWith) ? true : false

console.log(solution());