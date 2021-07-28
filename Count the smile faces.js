function countSmileys(arr = []) {
    let countResult = 0;
    arr.forEach(element => {
        if(element.length == 2) {
            if((element.indexOf(":") != -1 || element.indexOf(";") != -1) && (element.indexOf(")") != -1 || element.indexOf("D") != -1)) {
                countResult++;
            }
        } else if(element.length == 3) {
            if((element.indexOf(":") != -1 || element.indexOf(";") != -1) && (element.indexOf("-") != -1 || element.indexOf("~") != -1)  && (element.indexOf(")") != -1 || element.indexOf("D") != -1)) {
                countResult++;
            }
        }
    });
    return countResult;
}
console.log(countSmileys([':o(' , ';o)' , ';(' , ':D' , ';~>' , ';o(' , ':>']));