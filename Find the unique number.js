function findUniq(arr = []) {
    let score = {};
    arr.forEach(element => {
        if(score[element] == undefined) {
            score[element] = 1;
        } else {
            score[element]++;
        }
    });

    let result = 0;
    for(let element in score) {
        if(score[element] <= 1) {
            result = element;
        }
    }

    return parseFloat(result);
}

console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));
