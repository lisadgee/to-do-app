

window.onload = function() {
onReady();
};
function Delete() {
  const toDoList = document.getElementById('toDoList');
  const items = toDoList.getElementsByTagName("li");
  //console.log(items.length);
  for (var i = 0; i < items.length; i++) {
    //console.log(items[i]);
    if (items[i].getElementsByTagName('input')[0].checked == true) {
      console.log(items[i]);
      toDoList.removeChild(items[i]);
      }
  }
  //console.log(toDoList);
}

function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();
    let title = newToDoText.value;
    let newLi = document.createElement('li');
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    newLi.textContent = title;
    newLi.appendChild(checkbox);
    toDoList.appendChild(newLi);
    newToDoText.value = '';
  });
}
