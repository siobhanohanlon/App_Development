function lengthofWord(value) {
    var length = value.replace(" ", "").length;
    return length;
}
var answer1 = lengthofWord("HelloWorld");
console.log("length of word 1 is: " + answer1);
var answer2 = lengthofWord("test 2");
console.log("length of word 2 is: " + answer2);
