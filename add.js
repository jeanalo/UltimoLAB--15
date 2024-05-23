
class Task {
    constructor(name, completed = false) {
      this.name = name;
      this.completed = completed;
    }
  }
  
  
  function loadTasks() {
    const tasksData = localStorage.getItem("tasks");
    if (tasksData) {
      return JSON.parse(tasksData).map(task => new Task(task.name, task.completed));
    }
    return [];
  }
  
  // coneesto guardo info en el loccalstorage
  function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  const form = document.getElementById("add-task-form");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const taskInput = document.getElementById("task-input");
    const taskName = taskInput.value;
    if (taskName) {
      const newTask = new Task(taskName);
      const tasks = loadTasks();
      tasks.push(newTask);
      saveTasks(tasks);
      taskInput.value = "";
  
      
      const saveMessage = document.createElement("p");
      saveMessage.id = "save-message";
      saveMessage.textContent = "Tarea guardada correctamente";
      saveMessage.classList.add("show");
      form.after(saveMessage);
  
      setTimeout(() => {
        saveMessage.classList.remove("show");
      }, 2000);
    }
  });
  
  