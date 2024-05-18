const inputbox =document.getElementById("input-box");
const listcontainer = document.getElementById("list-container")
function addTask(){
    if(inputbox.value === ''){
      alert("You must Write Something!");

    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputbox.value + '<span class="edit">Edit</span>' +
        '<span class="delete">Delete</span>';
        listcontainer.appendChild(li);
        }
        inputbox.value=''
        saveData();
}
// Function to edit a task
function editTask(editButton) {
  const taskItem = editButton.parentElement;
  const currentText = taskItem.firstChild.nodeValue.trim();
  const newText = prompt("Edit the task:", currentText);
  if (newText !== null) {
      taskItem.firstChild.nodeValue = newText;
      saveData();
  }
}

// Function to delete a task
function deleteTask(deleteButton) {
  const taskItem = deleteButton.parentElement;
  if (confirm("Are you sure you want to delete this task?")) {
      listcontainer.removeChild(taskItem);
      saveData();
  }
}

listcontainer.addEventListener("click", function(e){

  if (e.target.classList.contains("edit")) {
    editTask(e.target);
} else if (e.target.classList.contains("delete")) {
    deleteTask(e.target);
}
 else if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
  }
  
},false);

function saveData(){
  localStorage.setItem("data", listcontainer.innerHTML);
  
}
function showTask(){
  listcontainer.innerHTML=localStorage.getItem("data")
}
showTask();