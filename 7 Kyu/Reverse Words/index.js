/*

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

*/

const reverseWords = (str = "test words are tests  all the time") => {
    let wordArray = str.split(" ");
    let mutatedArray = wordArray.map(word => {
        let letterArray = word.split("");
        let tmp = "";
        console.log(letterArray);
        letterArray.forEach(letter => {
            tmp = letter + tmp;
        });
        return tmp;
    })
    console.log(mutatedArray)
    return mutatedArray.join(" ")
}

console.log(reverseWords())

const refactor = str => str.split(" ")
    .map(word => {
        let tmp = ""
        word.split("").forEach(letter => {
            tmp=letter+tmp;
        });
        return tmp;
    }).join(" ");

console.log(refactor("this is a test"))