/*

Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

*/

const disemvowel = str => str.replaceAll(/(a|A|e|E|i|I|o|O)/ig,'');

const testFunc = (str = "This is a test comment for ALL the people") => {
    const regex = /(a|A|e|E|i|I|o|O)/ig;
    let testVar = str.replaceAll(regex,'');
        
    console.log(testVar);
}

testFunc();

console.log(disemvowel("TEST DATA of all sorts?"));