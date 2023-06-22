import Task from "./toDoClass";

export default class Project {
  constructor(project) {
    this.project = project;
    this.tasks = [];
  }

  newTask(taskObj, dueDate) {
    const newTask = new Task(taskObj, dueDate);
    this.tasks.push(newTask);
  }

  // newDueDate(date) {
  //   this.Task.dueDate(date);
}
// }
