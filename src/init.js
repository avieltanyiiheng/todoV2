import Task from "./toDoClass";
import Project from "./projectClass";
import setupDummyProject from "./dummyProject";
import { createButtonToAddTask } from "./createButtonToAddTask";
import { compareAsc, format } from "date-fns";

// Set up array for ALL projects

let allProjects = [];

export { allProjects };
// Function to append projects to allprojects array above

function addNewProject(projArr) {
  allProjects.push(projArr);
}

// Function to display allProjects on navBar
function displayAllProjectNames() {
  const navBar = document.querySelector(".currentProjects");
  navBar.innerHTML = "";

  for (const { project } of allProjects) {
    // Select the Navbar to append to
    const newProjButton = document.createElement("button");
    newProjButton.classList.add("project");
    newProjButton.textContent = project;
    navBar.append(newProjButton);

    // Add event listners.
    newProjButton.addEventListener("click", () => {
      const contentText = document.querySelector(".content-text");
      contentText.textContent = newProjButton.textContent;

      //   use button textcontent to find the project object in allproj
      const selectedProject = allProjects.find(
        ({ project }) => project === contentText.textContent
      );

      //   Loop over the tasks array in the selected Project object
      //   and adds the tasks to content
      const tasksDiv = document.querySelector(".tasks-div");

      tasksDiv.innerHTML = "";

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
          allProjects = allProjects.splice(
            allProjects.indexOf(projectArrayToRemove) - 1,
            1
          );
        });

        console.table(selectedProject.tasks[i].task);
      }

      createButtonToAddTask();

      //   console.log(selectedProject.tasks[0]);
    });
  }
}

export { displayAllProjectNames };
// function to display project and tasks on content div when clicked

// Add project button function
function addProjectButtonFunctionality() {
  const addProjectDiv = document.querySelector(".addProjects");

  const addProjectButton = document.querySelector(".addProject");

  addProjectButton.addEventListener("click", () => {
    const inputDiv = document.createElement("div");
    inputDiv.classList.add("inputDiv");

    const inputField = document.createElement("input");
    inputField.setAttribute("type", "text");

    const addNewProjectButton = document.createElement("button");
    addNewProjectButton.classList.add("new-btn");
    addNewProjectButton.textContent = "Add Project";

    // On clickin add project, creates a new Project object, appends it as a buttom on DOM
    addNewProjectButton.addEventListener("click", () => {
      const newProjectName = inputField.value;
      const newProject = new Project(newProjectName);

      //   Adds the new project obj to the ALL projects array
      addNewProject(newProject);
      displayAllProjectNames();
    });

    const cancelNewProjectButton = document.createElement("button");
    cancelNewProjectButton.classList.add("new-btn");
    cancelNewProjectButton.textContent = "Cancel";

    cancelNewProjectButton.addEventListener("click", () => inputDiv.remove());

    inputDiv.append(inputField, addNewProjectButton, cancelNewProjectButton);

    addProjectDiv.append(inputDiv);
  });
}

export default function init() {
  // -------------->SETUP OF DUMMY PROJECT<---------------------

  // Set up dummy project and tasks on init.
  const dummyProject = setupDummyProject("dummyProject1");
  const dummyProjectTwo = setupDummyProject("dummyProject2");

  //   Push dummy project to all projects array
  addNewProject(dummyProject);
  addNewProject(dummyProjectTwo);
  console.log(allProjects);

  //   --------------->START OF DOM MANUPULATION<---------------

  //// Select the main class
  const main = document.querySelector(".main");

  displayAllProjectNames();

  //   Add functionality to the "Add a Project button"
  addProjectButtonFunctionality();
}

// /////////TRY TO IMPORT THE ENTIRE CREATEBUTTONTOADDTASK
