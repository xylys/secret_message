let inputArray = [222, 224, 202, 220, 166, 202, 230, 194, 218, 202];

function secretMessageGenerator(inputArray) {
    let result = '';
    for (let i = 0; i <= inputArray.lenght; i++) {
        if (i % 2 == 0) { 
            result += String.fromCharCode(inputArray[i] / 2); 
        } else {
            result += String.fromCharCode(inputArray[i]);
        }
    }
    console.log(result);
    return result;
}


secretMessageGenerator(inputArray);
