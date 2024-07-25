const taskContainer = document.getElementById('taskContainer');

const addNewTask = event => {
    event.preventDefault();
    const { value } = event.target.taskText;
    if (!value) return;

    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');

    const taskContent = document.createElement('span');
    taskContent.textContent = value;
    task.appendChild(taskContent);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-times"></i>';
    deleteButton.classList.add('deleteButton', 'roundBorder');
    deleteButton.addEventListener('click', () => {
        deleteTask(task);
    });
    task.appendChild(deleteButton);

    task.addEventListener('click', changeTaskState);
    taskContainer.prepend(task);
    event.target.reset();
};

const changeTaskState = event => {
    event.target.classList.toggle('done');
};

const deleteTask = task => {
    task.remove();
};

const deleteTasks = () => {
    // Eliminar todas las tareas
    taskContainer.innerHTML = '';
};









