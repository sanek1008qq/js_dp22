
console.log("Welcome to KLUS!")

function filter(btnType){
    let btns = document.getElementsByClassName('filter-button')

    for(let btn of btns){
        btn.classList.remove('selected')
        if(btn.id === btnType){
            btn.classList.add('selected')
        }
    }

    //console.log(btns)
}