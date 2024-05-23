
const tasks = [
  { name: "Completar el nivel 5 de GTA", completed: false },
  { name: "Jugar Call of Duty", completed: true },
  { name: "Comprar skins en LOL", completed: false },
  { name: "Subir de nivel en Fortnite", completed: false },
  { name: "Conseguir el logro 'Platino' en God of War", completed: true },
  { name: "Terminar la historia principal de Assassin's Creed Valhalla", completed: false },
  { name: "Mejorar mi K/D en Valorant", completed: true },
  { name: "Conseguir todas las estrellas en Mario Kart 8 Deluxe", completed: false },
  { name: "Subir a Heroico en FreeFire", completed: false },
  { name: "Completar el Pokédex de Pokémon Sword and Shield", completed: true }
];

function renderTasks() {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = "";

  let completedTasks = 0;

  tasks.forEach((task, index) => {
      const taskItem = document.createElement("div");
      taskItem.classList.add("task");
      const taskName = document.createElement("span");
      taskName.textContent = task.name;
      if (task.completed) {
          taskName.style.textDecoration = "line-through"; 
          taskName.style.opacity = "0.4"; 
      }
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = task.completed;
      checkbox.addEventListener("change", () => {
          tasks[index].completed = !tasks[index].completed;
          renderTasks();
      });
      taskItem.appendChild(checkbox);
      taskItem.appendChild(taskName);
      taskList.appendChild(taskItem);

      if (task.completed) {
          completedTasks++;
      }
  });

  const completedTasksCount = document.getElementById("completed-tasks");
  completedTasksCount.textContent = completedTasks;
  const pendingTasksCount = document.getElementById("pending-tasks");
  pendingTasksCount.textContent = tasks.length - completedTasks;
}

renderTasks();

