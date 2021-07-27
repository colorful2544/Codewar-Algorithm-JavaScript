function high(x = "") {
    let char = "abcdefghijklmnopqrstuvwxyz".split("");
    let score = {};
    for (let index = 0; index < char.length; index++) {
        score[char[index]] = index + 1;
    }

    x = x.split(" ");

    let result = "";
    let scoreResult = 0;

    for (let indexX = 0; indexX < x.length; indexX++) {

        let indexXSplit = x[indexX].split("");
        let scoreState = 0;

        indexXSplit.forEach(element => {
            scoreState += score[element];
        });

        if(scoreState > scoreResult) {
            result = x[indexX];
            scoreResult = scoreState;
        }
    }

    return result;
}

high("man i need a taxi up to ubud");