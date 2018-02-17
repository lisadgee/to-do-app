
    funtion onReady(){
      const addToDoForm = document.getElementByID("addToDoForm");
      const newToDoText = document.getElementByID("newToDoText");
      const toDoList = document.getElementById("toDoList");

      addToDoForm.addEventListener('submit', event => {
        event.preventDefault();
        let title = newToDoText.value;
        let newLi = document.createElement("li");
        let checkbox = docuemnt.createElement('input');
        checkbox.type = "checkbox";
        newLi.textContent = title;
        newLiappendChild(checkbox);
        toDoLisa.appendChild(newLi);
        newToDoText.value = "";

    });
  }

    window.onload = function() {
