console.log('uzd!')


function biggestNumber(a, b, c){
    if(a > b & a > c){
        if(b < a & b > c){
            console.log(a, b, c)
        }else{
            console.log(a, c, b)
        }
    }
    if(b > a & b > c){
        if(a < b & a > c){
            console.log(b, a, c)
        }else{
            console.log(b, c, a)
        }
    }
    if(c > a & c > b){
        if(a < c & a > b){
            console.log(c, a, b)
        }else{
            console.log(c, b, a)
        }
    }
}

function biggestNumber1(a, b, c){

    if(a > b){
        let temp = a
        a = b
        b = temp
    }

    if(a > c){
        let temp = a
        a = c
        c = temp
    }

    if(b > c){
        let temp = b
        b = c
        c = temp
    }
}