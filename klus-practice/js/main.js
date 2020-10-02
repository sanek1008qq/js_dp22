
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

    let table = document.getElementsByTagName('tr')

    for(let row of table){
        if(row.className === ''){
            continue
        }

        delete row.removeAttribute('hidden')

        if(row.className !== btnType){
            row.setAttribute('hidden','hidden')
        }
    }
}