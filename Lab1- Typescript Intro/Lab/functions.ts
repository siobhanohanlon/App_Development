//Ask if counting spaces
function lengthofWord(value: string, spaces: boolean)
{
    if(spaces)
    {
        return value.length;
    }
    else
    {
        return value.replace(" ", "").length;
    }
}

let answer1 = lengthofWord("Hello World", false);
console.log("length of word 1 is: " + answer1);

let answer2 = lengthofWord("test 2", true);
console.log("length of word 2 is: " + answer2);