
// Example usage:


function addContainer() {

  console.log("hai")


  const myDiv = new Container('200px', '200px', 'yellow', 'Hello, World!');


  myDiv.appendTo('.main');


}

function addTextBox() {
  const myDiv = new TextBox()

  myDiv.appendTo('.main');

}





function selectImage() {


  //Adding Photo
  const fileInput = document.getElementById("fileInput");
  const preview = document.createElement("img");
  preview.style.height = "100px";
  preview.style.width = "100px";
  preview.style.backgroundColor = "green";



  fileInput.addEventListener("change", function (event) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {

        // Create a new reusable div instance
        const myDiv = new Image(e.target.result);
        myDiv.div.style.borderRadius = "20px"

        // Append the div to the body
        myDiv.appendTo('.main');

      };

      reader.readAsDataURL(file); // Read the image as a DataURL
    }
  });
}

// const draggable = document.getElementsByClassName("draggable")[0];
// const draggablee = document.getElementsByClassName("draggablee")[0];
// const dropzone = document.getElementById("dropzone");

// draggable.addEventListener("dragstart", (event) => {
//   event.dataTransfer.setData("text/plain", draggable.id);
// });

// draggablee.addEventListener("dragstart", (event) => {
//   event.dataTransfer.setData("text/plain", draggablee.id);
// });

// dropzone.addEventListener("dragover", (event) => {
//   event.preventDefault(); // Allow the drop by preventing default handling
// });

// dropzone.addEventListener("drop", (event) => {
//   event.preventDefault();
//   const data = event.dataTransfer.getData("text/plain");
//   const draggedElement = document.getElementById(data);
//   dropzone.appendChild(draggedElement);
// });
