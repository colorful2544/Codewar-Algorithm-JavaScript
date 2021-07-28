function toWeirdCase(string = "") {
    let result = [];
    for(let element of string.split(" ")) {
        let newWord = "";
        for(let index = 0; index < element.length; index++) {
            if(index % 2 == 0) {
                newWord += element[index].toUpperCase();
            } else {
                newWord += element[index];
            }
        }
        result.push(newWord);
    }
    return result.join(" ");
}
console.log(toWeirdCase("This is a test"));