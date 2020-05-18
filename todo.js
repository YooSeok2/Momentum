const todoForm = document.querySelector('.js_todoForm'),
        todoInput = todoForm.querySelector('input'),
        todoList = document.querySelector('.js_todoList')

const USER_TODO = 'todos'
let todos = []

saveTodoList = () =>{
    localStorage.setItem(USER_TODO, JSON.stringify(todos))
}

handleDeleteTodoList=(e)=>{
    const btn = e.target
    const li = btn.parentNode
    li.remove()
    const cleanTodos = todos.filter(function(item){
        
        return item.id !== parseInt(li.id)
    })
  
    todos = cleanTodos
    saveTodoList()
}

paintTodoValue = (text)=>{
   const li = document.createElement('li')
   const deleteBtn = document.createElement('button')
   const span = document.createElement('span')
   const id = todos.length+1
   deleteBtn.innerHTML='X'
   deleteBtn.addEventListener('click', handleDeleteTodoList)
   span.innerText = text
   li.appendChild(deleteBtn)
   li.appendChild(span)
   li.id = id
   todoList.appendChild(li)
   //todos 배열에 todoObj에서 저장된 값과 아이디를 추가해준다.
   const todoObj = {
       text :text,
       id : id
   }
   todos.push(todoObj)
   saveTodoList()
}

handleSubmit=(e)=>{
    e.preventDefault()
    const currentValue = todoInput.value
    paintTodoValue(currentValue)
    todoInput.value = ''
}

loadTodoList=()=>{
    const loadedTodos = localStorage.getItem(USER_TODO)
    if(todos !== null){
        const parsedTodos = JSON.parse(loadedTodos)
       parsedTodos.forEach(function(element){
           paintTodoValue(element.text)
       })
    }
    console.log(loadedTodos, todos)
}

init = () =>{
    loadTodoList()
    todoForm.addEventListener('submit', handleSubmit)
}

init()