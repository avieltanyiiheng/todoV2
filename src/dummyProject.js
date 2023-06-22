import Project from "./projectClass";
import Task from "./toDoClass";

// Function to set up dummy project
export default function setupDummyProject(project) {
  const dummyProject = new Project(project);

  dummyProject.tasks.push(new Task("Task1"));

  // const dummyTaskOne.tasks.push = dummyProject.newTask("Task1");
  // const dummyTaskTwo = dummyProject.newTask("Task2");

  //   dummyProject.newTask(dummyTaskOne);

  return dummyProject;
}
