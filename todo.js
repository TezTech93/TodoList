var mainC = document.getElementById("mainContainer");
var headerC = document.getElementById("headerContainer");
var todoC =document.getElementById("todoContainer"); 
var buttonC = document.getElementById("buttonContainer");

//Buttons
const submit = document.getElementById("submitBtn");

var todoList = ['Task 1','Task 2','Task 3'];
var newToDo = [];

const newTodoContainer = document.createElement("div")
  var todoInput = document.createElement("input");
  var newTodoBtn = document.createElement("button");
  newTodoBtn.textContent = "Add";
  newTodoContainer.classList.add("todo-row");
  newTodoContainer.classList.add('list-group-item');
  newTodoContainer.appendChild(todoInput);
  newTodoContainer.appendChild(newTodoBtn);
  newTodoContainer.style.display = 'none';

function addTask() {
  //Insert Input
  
  buttonC.appendChild(newTodoContainer);
  
  //Add ID
  newTodoBtn.id = 'addBtn';
  todoInput.id = 'todoInput';
}

function showTodoInput() {
  newTodoContainer.style.display = 'flex';
  newTodoContainer.id = 'todo';
  //Collect Input
  var addBtn = document.getElementById('addBtn');
  var todoInput = document.getElementById('todoInput');
}


var num = 1;

function add() {
  //Add to todo todoList
  var newTodoTask = document.createElement('div');
  newTodoTask.classList.add("todo-row");
  var newTodoCheckbox =  document.createElement("input");
  newTodoCheckbox.setAttribute("type", "checkbox");
  var newTodoTaskText =  document.createElement('h4');
  newTodoTask.appendChild(newTodoCheckbox);
  newTodoTask.appendChild(newTodoTaskText);
  newTodoTaskText.textContent = todoInput.value;
  todoC.appendChild(newTodoTask);
  newTodoContainer.style.display = 'none';
  todoInput.value = '';
}


addTask();
submit.addEventListener("click", showTodoInput);
addBtn.addEventListener('click', add);