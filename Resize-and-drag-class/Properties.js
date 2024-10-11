
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
  