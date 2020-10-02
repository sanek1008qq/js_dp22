console.log('Array!')


function generateArray(start, end){

    let rangeArray = []

    for(let i = start; i <= end; i++){
        rangeArray.push(i)
    }
    console.log(rangeArray)
}

let data = generateArray(3,9)
console.log(data)