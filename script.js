// Selecting necessary elements from the HTML
const addTaskButton = document.getElementById('add-task');
const taskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

// Event listener for the "Add Task" button
addTaskButton.addEventListener('click', addTask);

// Function to add a new task
function addTask() {
    // Get the task text from the input field
    const taskText = taskInput.value.trim();

    // If the input is empty, do nothing
    if (taskText === "") return;

    // Create a new list item (li) for the task
    const li = document.createElement('li');

    // Create a span to hold the task text
    const span = document.createElement('span');
    span.textContent = taskText;

    // Create a button to mark the task as complete
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', () => {
        // Toggles the 'completed' class on the task
        li.classList.toggle('completed');
    });

    // Create a button to edit the task
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit');
    editButton.addEventListener('click', () => {
        // Prompts the user to enter a new task text
        const newTaskText = prompt('Edit task:', span.textContent);
        if (newTaskText) {
            span.textContent = newTaskText.trim();
        }
    });

    // Create a button to delete the task
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        // Removes the task from the list
        taskList.removeChild(li);
    });

    // Append the buttons and the span to the list item
    li.appendChild(span);
    li.appendChild(completeButton);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    // Append the list item to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
}
