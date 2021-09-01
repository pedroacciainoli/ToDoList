
//seletores

const   todoInput = document.querySelector('.todo-input'),
        todoBotao = document.querySelector('.todo-botao'),
        todoLista = document.querySelector('.todo-lista'),
        filtrarOpt = document.querySelector('.filtrar-todo');

//listeners

todoBotao.addEventListener('click', addTodo);
todoLista.addEventListener('click', deletarCheck);
filtrarOpt.addEventListener('change',filtroTodo);

//função 1

function addTodo(a){
  a.preventDefault();
  

  if(todoInput.value !== "" ){
    


  
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');




 
  const todoli = document.createElement('li');  
  


  if(todoInput.value.length > 28){
    todoli.innerText = todoInput.value.substr(0, 45) + '...';
}else{
    todoli.innerText = todoInput.value;
}


todoli.classList.add('todo-item');
todoDiv.append(todoli);

todoInput.value = ''; 
const completeButton = document.createElement('button');

completeButton.innerHTML = `&#9745;` ;
completeButton.classList.add('completa-btn');
todoDiv.append(completeButton);

const deleteButton = document.createElement('button');


deleteButton.innerHTML = `&#9746;`;
deleteButton.classList.add('delete-btn');
todoDiv.append(deleteButton);

todoLista.append(todoDiv);

  }
  else{
    alert("Digite uma tarefa!");
  }

}


//função 2

function deletarCheck(e){
  if(e.target.classList[0] === 'delete-btn'){
    e.target.parentElement.classList.add('fall'); 
    // e.target.parentElement.remove();
    e.target.parentElement.addEventListener('transitionend', function(){
        e.target.parentElement.remove();
    });
  }
  if(e.target.classList[0] === 'completa-btn'){
    e.target.parentElement.classList.toggle('completed');
  }
}



//função 3

function filtroTodo(e){
  const todos = todoLista.childNodes;

   todos.forEach(function(todo){

      if(todo.nodeName !== "#text"){
      switch(e.target.value){
          case 'all':
              todo.style.display = 'flex';
              break;
          case 'completo':
              if(todo.classList.contains('completed')){
                  todo.style.display = 'flex';
              }else{
                  todo.style.display = 'none';
              }
              break;
          case 'incompleto':  
              if(!todo.classList.contains('completed')){
                  todo.style.display = 'flex';
              }else{
                  todo.style.display = 'none';
              }
              break;
      }
      }
   })
  }

  // Salvar tudo no storage

function salvarLocal(todo){
  // verifica se já há registros
  let todos;
  if(localStorage.getItem("todos") === null){
      todos = [];
  }else{
      todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
}





















// Pega o dia da semana e joga uma frase aleatóriamente separando dia da semana e final de semana.

var dia = document.getElementById("dia");

var d = new Date();

var semana = new Array(7);
semana[0] = "Domingo 🖖";
semana[1] = "Segunda 💪😀";
semana[2] = "Terça-Feira 😜";
semana[3] = "Quarta-Feira 😌☕️";
semana[4] = "Quinta-Feira 🤗";
semana[5] = "Sextou 🍻";
semana[6] = "Sábado 😴";

var n = semana[d.getDay()];

var fraseAleatoria = Array(
    "Eita, hoje é ",
    "Show, hoje é ",
    "Parece que hoje é "
  );
  
  var fraseAleatoria =
  fraseAleatoria[Math.floor(Math.random() * fraseAleatoria.length)];

  var e_fds = d.getDay() == 0 || d.getDay() == 6 ? dia.innerHTML="Bom descanso, hoje é " + n : dia.innerHTML = fraseAleatoria + n ;
