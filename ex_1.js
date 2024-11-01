function manageTasks(tasks) {
    return {
        pendingTasks: tasks.filter(task => task.status === "pending"),
        completedTasks: tasks.filter(task => task.status === "completed")
    };
}

const tasks = [
    { title: "study git", status: "completed" },
    { title: "study HTML", status: "completd" },
    { title: "Enter career day", status: "completed" },
    { title: "finish JavaScript", status: "pending" },
    { title: "get the Internship", status: "pending" }
  ];

console.log(manageTasks(tasks));




