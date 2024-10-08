

function addContainer() {
  var newContainer = document.createElement("div");

  var page = document.getElementsByClassName("main")[0];
  newContainer.classList.add("movable");
  page.appendChild(newContainer);

  //Adding Movable property
  newContainer.addEventListener("mousedown", function (e) {
    e.preventDefault();
    let shiftX = e.clientX - newContainer.getBoundingClientRect().left;
    let shiftY = e.clientY - newContainer.getBoundingClientRect().top;

    function moveAt(pageX, pageY) {
      newContainer.style.left = pageX - shiftX + "px";
      newContainer.style.top = pageY - shiftY + "px";
    }

    function onMouseMove(e) {
      moveAt(e.pageX, e.pageY);
    }

    // Move the element on mousemove
    document.addEventListener("mousemove", onMouseMove);

    // Remove the mousemove listener when the mouse button is released
    document.addEventListener(
      "mouseup",
      function () {
        document.removeEventListener("mousemove", onMouseMove);
      },
      { once: true }
    );
  });

  newContainer.ondragstart = function () {
    return false; // Prevent default dragging behavior
  };

  //Adding Resizing Functionality

  newContainer.classList.add("resizable");
  var resizer = document.createElement("div");
  resizer.classList.add("resizer");

  resizer.addEventListener("mousedown", function (e) {
    e.preventDefault();
    e.stopPropagation();

    // Get the current mouse position
    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = parseInt(
      document.defaultView.getComputedStyle(newContainer).width,
      10
    );
    const startHeight = parseInt(
      document.defaultView.getComputedStyle(newContainer).height,
      10
    );

    // Function to resize the div
    function resize(e) {
      newContainer.style.width = startWidth + (e.clientX - startX) + "px";
      newContainer.style.height = startHeight + (e.clientY - startY) + "px";
    }

    // Function to stop resizing
    function stopResize() {
      document.removeEventListener("mousemove", resize);
      document.removeEventListener("mouseup", stopResize);
    }

    // Attach the listeners to `mousemove` and `mouseup` events
    document.addEventListener("mousemove", resize);
    document.addEventListener("mouseup", stopResize);
  });

  newContainer.appendChild(resizer);
}





function selectImage() {
  

//Adding Photo
const fileInput = document.getElementById("fileInput");
const preview = document.createElement("img");
preview.style.height = "100px";
preview.style.width = "100px";
preview.style.backgroundColor = "green";


var page = document.getElementsByClassName("main")[0];

fileInput.addEventListener("change", function (event) {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      preview.src = e.target.result; // Set the image src to the file content
      page.appendChild(preview);
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
