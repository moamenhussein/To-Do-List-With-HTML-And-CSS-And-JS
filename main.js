let button = document.querySelector(".push");
let input = document.querySelector(".newtask input");
let tasks = document.querySelector(".tasks");

button.onclick = function () {
  if (input.value === "") {
    alert("Please Enter a Task");
  } else {
    tasks.innerHTML += `
    <div class="task">
      <span id="taskname">${input.value}</span>
      <button class="delete">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
    `;
    let deleteTask = document.querySelectorAll(".delete");
    for (i = 0; i < deleteTask.length; i++) {
      deleteTask[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  }
  let taskss = document.querySelectorAll(".task");
  for (let j = 0; j < taskss.length; j++) {
    taskss[j].onclick = function () {
      this.classList.toggle("completed");
    };
  }
  document.querySelector(".newtask input").value = "";
};
