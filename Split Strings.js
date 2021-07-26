function solution(str = "") {
    let result = [];
    let strStack = "";
    
    if(str.length % 2 != 0) {
        str += "_";
    }
    for (let index = 0; index < str.length; index++) {
        
        console.log(str[index]);
        if (strStack.length < 2) {
            strStack += str[index];
            console.log("strStack : " + strStack);
        }
        else {
            result.push(strStack);
            strStack = str[index];
        }
    }
    if(strStack != "") {
        result.push(strStack);
    }
    return result;
}



console.log(solution('abcdefg'));