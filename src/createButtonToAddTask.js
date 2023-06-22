import { allProjects } from "./init";
import { displayAllProjectNames } from "./init";
import { compareAsc, format } from "date-fns";

function createButtonToAddTask() {
  const content = document.querySelector(".content");

  const taskOptions = document.createElement("div");
  taskOptions.classList.add("task-options");

  const existingTaskOptions = document.querySelector(".task-options");
  existingTaskOptions.remove();

  const newTaskButton = document.createElement("button");
  newTaskButton.textContent = "Add a Task";
  newTaskButton.classList.add("add-a-task");

  taskOptions.append(newTaskButton);

  content.append(taskOptions);

  //   Add functionality to the button

  newTaskButton.addEventListener("click", () => createInputForTask());
}

function createInputForTask() {
  const taskOptions = document.querySelector(".task-options");
  const inputField = document.createElement("input");
  inputField.setAttribute("type", "text");

  const button = document.createElement("button");
  button.classList.add("add-task");
  button.textContent = "Add Task";

  const dateField = document.createElement("input");
  dateField.setAttribute("type", "date");
  dateField.setAttribute("value", "2023-01-08");
  dateField.classList.add("date");

  taskOptions.append(inputField, dateField, button);

  button.addEventListener("click", () => {
    const currentProject = document.querySelector(".content-text").textContent;

    const selectedProject = allProjects.find(
      ({ project }) => project === currentProject
    );

    const dateFields = document.querySelector(".date");
    let date = format(new Date(dateFields.value), "dd/MM/yyyy");
    selectedProject.newTask(inputField.value, date);

    const tasksDiv = document.querySelector(".tasks-div");

    tasksDiv.innerHTML = "";

    console.log(selectedProject);

    // Refresh and add new tasks!
    for (let i = 0; i < selectedProject.tasks.length; i++) {
      const task = selectedProject.tasks[i].task;
      const dueDate = selectedProject.tasks[i].dueDate;

      const newTask = document.createElement("div");
      newTask.classList.add("new-task");
      newTask.textContent = task;

      const newDueDate = document.createElement("div");
      newDueDate.classList.add("new-due-date");
      newDueDate.textContent = dueDate;

      const doneButton = document.createElement("button");
      doneButton.textContent = "Remove";

      tasksDiv.append(newTask, newDueDate, doneButton);

      doneButton.addEventListener("click", () => {
        const selectedTask = newTask.textContent;

        const projectArrayToRemove = allProjects.find(
          (project) => project === selectedProject
        );

        console.log(allProjects.indexOf(projectArrayToRemove));
      });

      console.table(selectedProject.tasks[i].task);
    }
  });
  displayAllProjectNames();
}

export { createButtonToAddTask };
