function manageTasks(tasks) {
    return {
        pendingTasks: tasks.filter(task => task.status === 'pending'),
        completedTasks: tasks.filter(task => task.status === 'completed')
    };
}
