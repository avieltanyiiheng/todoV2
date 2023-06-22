export default class Task {
  constructor(task, dueDate = "No Date") {
    this.task = task;
    this.dueDate = dueDate;
  }

  task() {
    return this.task;
  }

  dueDate() {
    return this.dueDate;
  }
}
