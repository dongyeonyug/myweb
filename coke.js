// const loginForm=document.getElementsByClassName(".form");
const loginForm=document.querySelector(".form");
const loginInput =document.querySelector(".form input");
const greeting=document.querySelector("#greeting");

const HIDDEN_ClASSNAME="hidden";
const USERNAME_KEY="username";

function onLoginSubmit(event){

    event.preventDefault();
    loginForm.classList.add(HIDDEN_ClASSNAME);
    const username=loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username)
}

function paintGreetings(username){
    greeting.innerText=`Hello ${username}`;
    greeting.classList.remove(HIDDEN_ClASSNAME);
    
}

// function handleLinkClick(event){

//     event.preventDefault();
//     console.log(event);
   

// }



// link.addEventListener("click",handleLinkClick);

const savedUsername= localStorage.getItem(USERNAME_KEY);

if(savedUsername===null){
    loginForm.classList.remove(HIDDEN_ClASSNAME);
    loginForm.addEventListener('submit',onLoginSubmit);
}
else{
    paintGreetings(savedUsername);
}


