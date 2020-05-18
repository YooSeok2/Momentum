const form = document.querySelector('.js_form'),
        input = form.querySelector('input'),
      greeting = document.querySelector('.js_greeting')

const USER_NAME = 'currentUser'
const SHOWING = 'showing'

saveUserName=(text)=>{
    localStorage.setItem(USER_NAME, text)
}

handleSubmit = (e)=>{
  e.preventDefault()
  const input_value = input.value;
  saveUserName(input_value);
  userGreeting(input_value);
}

askUserName=()=>{
    form.classList.add(SHOWING)
    form.addEventListener('submit', handleSubmit)
}

userGreeting =(text)=>{
    form.classList.remove(SHOWING)
    greeting.classList.add(SHOWING)
    greeting.innerHTML = `Hello ${text}`
}

getLocalStorage = ()=>{
    const currentUser = localStorage.getItem(USER_NAME)
    
    if(currentUser === null){
        //user is
        askUserName()
    }else{
        //user not
        userGreeting(currentUser)
    }
}

init = ()=>{
    getLocalStorage()
}

init()