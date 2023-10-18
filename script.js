function createList(arr, parent = document.body){

    for(let i = 0 ; i < arr.length; i++){
        parent.insertAdjacentHTML('beforeend', `<li> ${arr[i]} </li>`)    
    }

}


const arr = ["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"];

createList(arr)



