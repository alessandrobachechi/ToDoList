document.addEventListener('DOMContentLoaded', () => {
  const todoList = [];
  const todoInput = document.querySelector('input[type="text"]');
  const addButton = document.getElementById('add-new-btn');
  const todoListElement = document.querySelector('ul.list-group');
  const showCompletedCheckbox = document.getElementById('show-completed');
  const errorMessage = document.createElement('div');
  errorMessage.style.color = 'red';
  errorMessage.style.marginTop = '10px';
  document.body.appendChild(errorMessage);
 
  function renderTodoList() {
     todoListElement.innerHTML = '';
     let remainingCount = 0;
     let totalCount = 0;
 
     todoList.forEach(todo => {
       
       if (showCompletedCheckbox.checked && !todo.done) return;
 
       const listItem = document.createElement('li');
       listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
 
       const checkbox = document.createElement('input');
       checkbox.type = 'checkbox';
       checkbox.checked = todo.done;
       checkbox.addEventListener('change', () => {
         setTimeout(() => {
           todo.done = checkbox.checked;
           renderTodoList();
         }, 500);
       });
 
       const label = document.createElement('span');
       label.textContent = todo.description;
 
       const deleteButton = document.createElement('button');
       deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
       deleteButton.textContent = 'Delete';
       deleteButton.addEventListener('click', () => {
         todoList.splice(todoList.indexOf(todo), 1);
         renderTodoList();
       });
 
       listItem.appendChild(checkbox);
       listItem.appendChild(label);
       listItem.appendChild(deleteButton);
       todoListElement.appendChild(listItem);
 
       totalCount++;
       if (!todo.done) remainingCount++;
     });
 
     document.querySelector('h3 span.badge').textContent = remainingCount;
     document.querySelector('h3 span.badge').nextSibling.textContent = totalCount;
  }
 
  addButton.addEventListener('click', () => {
     const description = todoInput.value.trim();
     if (!description) {
       errorMessage.textContent = 'Invalid todo';
       setTimeout(() => {
         errorMessage.textContent = '';
       }, 2000);
       return;
     }
     if (todoList.some(todo => todo.description === description)) {
       errorMessage.textContent = 'A todo with this description already exists.';
       setTimeout(() => {
         errorMessage.textContent = '';
       }, 2000);
       return;
     }
 
     todoList.push({ description, done: false });
     todoInput.value = '';
     renderTodoList();
  });
 
  showCompletedCheckbox.addEventListener('change', renderTodoList);
 
  renderTodoList();
 });
 