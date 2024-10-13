



//Adding Page

const pages = [];
function addPage() {
  const frame = new Frame("500px", "500px", "white", "");
  frame.element.id = "page1";
  pages.push(myDiv);
  frame.appendTo(".work-space");
}




//Adding Table
const tableList = [];
let tableId = 0
function addTable() {
  const table = new Table("400px", "500px", "grey", "", 4, 5);
  table.element.id = "Table" + (tableId++)
  tableList.push(table)
  table.appendTo("#" + pages[0].element.id);
}


//Adding Container
const containerList = [];
let viewId = 0
function addContainer() {
  const view = new View("200px", "200px", "grey", "");
  view.element.id = "v" + (viewId++)
  containerList.push(view);
  view.appendTo("#" + pages[0].element.id);
}

const textBoxList = [];
let textBoxId = 0
function addTextBox() {
  const textBox = new TextBox();
  textBox.element.id = "T" + (textBoxId++)
  textBoxList.push(textBox)
  textBox.appendTo("#" + pages[0].element.id);
}


const imageList=[];
let imageId = 0
function selectImage() {
  //Adding Photo
  const fileInput = document.getElementById("fileInput");

  const imageElement = document.createElement("img");

  imageElement.style.height = "100px";
  imageElement.style.width = "100px";
  imageElement.style.backgroundColor = "green";

  fileInput.addEventListener("change", function (event) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        // Create a new reusable div instance
        const image = new Image(e.target.result);
        image.element.style.borderRadius = "20px";
        image.element.id = "I" + (imageId++);

        // Append the div to the body
        image.appendTo("#" + pages[0].element.id);
      };

      reader.readAsDataURL(file); // Read the image as a DataURL
    }
  });
  fileInput.click()
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
