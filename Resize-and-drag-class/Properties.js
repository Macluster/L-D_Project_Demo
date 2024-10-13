
function onBackgroundChanged(event) {
    console.log(event.target.value)
  
    var view = document.getElementById(currentSelectedContainer + "")
    console.log(view)
    view.style.backgroundColor = event.target.value
  
  }
  function onCornerRadiusChanged(event) {
    console.log(event.target.value)
  
    var view = document.getElementById(currentSelectedContainer + "")
    console.log(view)
    view.style.borderRadius = event.target.value + "px";
  }
  
  function onheightChanged(event) {
    console.log(event.target.value)
  

  
  }

  function onWidthChanged(event)
  {
    console.log(event.target.value)
    var view = document.getElementById(currentSelectedContainer + "")
    console.log(view)
    view.style.width = event.target.value + "px";
  }

  
function selectBackgroundImage() {
  //Adding Photo
  const fileInput = document.getElementById("backgroundImage");

  const preview = document.getElementById(currentSelectedContainer + "")


  fileInput.addEventListener("change", async function (event) {
    const file = event.target.files[0];

    if (file) {
      const imageUrl = await URL.createObjectURL(file);
      console.log(imageUrl)

      preview.style.backgroundRepeat = "no-repeat"
      preview.style.backgroundSize = "cover"


      preview.style.backgroundImage = `url('${imageUrl}')`;
    }
  });
  fileInput.click()
}

  