const taskInput = document.getElementById("newTask");
const btn = document.getElementById("btn");
const taskList = document.getElementById("taskList");



btn.addEventListener("click", function() {
    let task = taskInput.value;

    if(task==="") {
        return;
    }

    let taskItem = document.createElement("div");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.addEventListener("change", function() {
    if (checkbox.checked) {
        taskItem.style.textDecoration = "line-through";
    } else {
        taskItem.style.textDecoration = "none";
    }
   });

    taskItem.appendChild(checkbox);
    taskItem.append(" " + task);


    let deleteBtn = document.createElement("button");
   
    
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click",function() {
        taskItem.remove();
    })

    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);
    
    taskInput.value = "";
});

taskInput.addEventListener("keydown", function(event) {
   if(event.key == "Enter") {
    btn.click();
   }
});


