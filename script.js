document.addEventListener('DOMContentLoaded', function () {
    const taskContainer = document.getElementById('taskContainer');
    const taskDescriptionInput = document.getElementById('taskDescription');
    const taskDeadlineInput = document.getElementById('taskDeadline');
    const taskPriorityInput = document.getElementById('taskPriority');
    
    document.addEventListener('DOMContentLoaded', function () {
        const navList = document.getElementById('navList');
        const menuIcon = document.querySelector('.menu-icon');
      
        function toggleMenu() {
          navList.classList.toggle('show');
        }
      
        menuIcon.addEventListener('click', toggleMenu);
      });
      
      
      
    function addTask(description, deadline, priority) {
      const taskDiv = document.createElement('div');
      taskDiv.className = 'task';
  
      const label = document.createElement('label');
      label.textContent = `${description} (Deadline: ${deadline}, Priority: ${priority})`;
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', function () {
        taskDiv.remove();
      });
  
      taskDiv.appendChild(label);
      taskDiv.appendChild(deleteButton);
  
      taskContainer.appendChild(taskDiv);
    }
  
    function addNewTask() {
      const description = taskDescriptionInput.value;
      const deadline = taskDeadlineInput.value;
      const priority = taskPriorityInput.value;
  
      if (description && deadline && priority) {
        addTask(description, deadline, priority);
  
        // Clear input fields after adding a task
        taskDescriptionInput.value = '';
        taskDeadlineInput.value = '';
        taskPriorityInput.value = 'High';
      } else {
        alert('Please fill in all task details.');
      }
    }
  
    // Example tasks
    addTask('Design homepage', '2023-12-20', 'High');
    addTask('Implement contact form', '2023-12-25', 'Medium');
    addTask('Optimize images', '2023-12-22', 'Low');
  
    // Function to add new tasks
    window.addNewTask = addNewTask;
  });
  