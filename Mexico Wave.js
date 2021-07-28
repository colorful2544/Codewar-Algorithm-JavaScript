function wave(str = "") {
    str = str.split("");
    let result = [];

    for (let i = 0; i < str.length; i++) {

        let newWord = "";

        for (let j = 0; j < str.length; j++) {
            if(i == j && str[j] != " ") {
                newWord += str[j].toUpperCase();
            } else {
                newWord += str[j];
            }
        }
        if(newWord != newWord.toLowerCase()) result.push(newWord);
    }

    return result;
}
console.log(wave("two words"));