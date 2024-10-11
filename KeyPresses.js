    // Adjust scale of the div
    function adjustScale(factor) {
        scaleFactor += factor;
        // Prevent scaling too small
        if (scaleFactor < 0.1) scaleFactor = 0.1;

        // Apply new scale
        var element=document.getElementsByClassName(".main")
        element.style.transform = `scale(${scaleFactor})`;
    }

    // Keydown listener to detect Ctrl + Plus/Minus
    window.addEventListener('keydown', (event) => {
        if (event.ctrlKey && (event.key === '+' || event.key === '=')) {
            // Ctrl + Plus: Scale up
            adjustScale(0.1);  // Increase scale by 0.1
            event.preventDefault();  // Prevent default zoom behavior
        } else if (event.ctrlKey && event.key === '-') {
            // Ctrl + Minus: Scale down
            adjustScale(-0.1);  // Decrease scale by 0.1
            event.preventDefault();  // Prevent default zoom behavior
        }
    });