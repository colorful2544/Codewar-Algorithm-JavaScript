function count(string = "") {
    let result = {};
    string = string.split("");
    string.forEach(element => {
        if(result[element] == undefined) {
            result[element] = 1;
        }
        else {
            result[element]++;
        }
    });
    return result;
}

console.log(count("aba"))