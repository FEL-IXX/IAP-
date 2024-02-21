 // Query for the submit button and input task field
 const submit = document.getElementById("submit");
 const newTask = document.getElementById("taskInput");

 // Disable the submit button by default
 submit.disabled = true;

 // Listen for input to be typed into the input field
 newTask.addEventListener("input", function () {
     // Enable submit button when there is text in the input field
     submit.disabled = !newTask.value.trim();
 });

 // Listen for submission of form
 document.getElementById("taskForm").addEventListener("submit", function (event) {
     // Prevent default form submission
     event.preventDefault();

     // Find the task the user just submitted
     const taskText = newTask.value.trim();

     if (taskText) {
         // Create a list item for the new task
         const newListItem = document.createElement("li");
         newListItem.textContent = taskText;

         // Add new task to the unordered list
         document.getElementById("tasks").appendChild(newListItem);

         // Clear input field
         newTask.value = "";

         // Disable submit button after task is added
         submit.disabled = true;
     }
 });

 // Prevent default form submission
 function handleSubmit(event) {
     event.preventDefault();
     return false;
 }