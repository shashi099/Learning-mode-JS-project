let btn = document.querySelector('#btn');
let nameG = document.querySelector('#name');

let checker = true;

btn.addEventListener('click', () => {
    console.log("clicked");
    if(checker){
        nameG.innerHTML = "Friend"
        nameG.style.color = "green"
        btn.innerHTML = "Remove Friend"
        checker = false
    }else{
        nameG.innerHTML = "Stranger"
        nameG.style.color = "red"
        btn.innerHTML = "Add Friend"
        checker = true;
    }
})