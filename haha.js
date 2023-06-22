class Project {
  constructor(project) {
    this.project = project;
    this.tasks = [];
  }

  newTask(taskObj) {
    const newTask = new Task(taskObj);
    this.tasks.push(newTask);
  }
}


class Task {
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


const a = new Project("test")

a.newTask("b")
a.newTask("c")

////

 =a.tasks.find(({ task }) => task === "b")
Object { task: "b", dueDate: "No Date" }

b =a.tasks.find(({ task }) => task === "b").dueDate 