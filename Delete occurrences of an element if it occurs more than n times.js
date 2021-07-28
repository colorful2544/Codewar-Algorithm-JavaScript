function deleteNth(arr = [],n = 0) {
    let score = {};
    let result = [];

    arr.forEach(element => {
        if(score[element] == undefined) {
            score[element] = 1;
            result.push(element);
        } else {
            if(score[element] < n) {
                score[element]++
                result.push(element);
            }
        }
    });

    return result;
}

console.log(deleteNth([20,37,20,21],1));