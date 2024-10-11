class View {
    constructor(width, height, backgroundColor, content) {
        this.element = document.createElement('div');
        this.element.style.width = width;
        this.element.style.height = height;
        this.element.style.backgroundColor = backgroundColor;
        this.element.textContent = content || '';

        // Set styles for positioning and make div movable and resizable
        this.element.style.position = 'absolute';
        this.element.style.left = '0px';
        this.element.style.top = '0px';
        

        this.element.classList.add("movable");
        this.element.classList.add("resizable");

        // Adding Movable Property
        this.element.addEventListener("mousedown", (e) => {
            e.stopPropagation();
            if (e.target.classList.contains('resizer')) return; // Ignore if clicking the resizer

            currentSelectedContainer=this.element.id

            e.preventDefault();
            const parentRect = this.element.parentNode.getBoundingClientRect();
            const shiftX = e.clientX - this.element.getBoundingClientRect().left;
            const shiftY = e.clientY - this.element.getBoundingClientRect().top;

            const moveAt = (pageX, pageY) => {
                const newLeft = pageX - parentRect.left - shiftX;
                const newTop = pageY - parentRect.top - shiftY;

                // Constrain movement within parent bounds
                const maxLeft = parentRect.width - this.element.offsetWidth;
                const maxTop = parentRect.height - this.element.offsetHeight;

                this.element.style.left = Math.max(0, Math.min(newLeft, maxLeft)) + "px";
                this.element.style.top = Math.max(0, Math.min(newTop, maxTop)) + "px";
            };

            const onMouseMove = (e) => {
                moveAt(e.pageX, e.pageY);
            };

            // Attach the move listener
            document.addEventListener("mousemove", onMouseMove);

            // Remove listener when mouse is released
            document.addEventListener("mouseup", () => {
                document.removeEventListener("mousemove", onMouseMove);
            }, { once: true });
        });

        this.element.ondragstart = function () {
            return false; // Prevent default dragging behavior
        };

        // Adding Resizing Functionality
        const resizer = document.createElement("div");
        resizer.classList.add("resizer");

        resizer.addEventListener("mousedown", (e) => {
            e.preventDefault();
            e.stopPropagation();

            // Get the current mouse position
            const startX = e.clientX;
            const startY = e.clientY;
            const startWidth = parseInt(document.defaultView.getComputedStyle(this.element).width, 10);
            const startHeight = parseInt(document.defaultView.getComputedStyle(this.element).height, 10);

            const resize = (e) => {
                this.element.style.width = startWidth + (e.clientX - startX) + "px";
                this.element.style.height = startHeight + (e.clientY - startY) + "px";
            };

            const stopResize = () => {
                document.removeEventListener("mousemove", resize);
                document.removeEventListener("mouseup", stopResize);
            };

            // Attach the listeners to `mousemove` and `mouseup` events
            document.addEventListener("mousemove", resize);
            document.addEventListener("mouseup", stopResize);
        });

        this.element.appendChild(resizer);
    }

    // Method to add the div to the page
    appendTo(parentSelector) {
        const parent = document.querySelector(parentSelector);
        if (parent) {
            parent.appendChild(this.element);
        } else {
            console.error(`Parent element '${parentSelector}' not found.`);
        }
    }

    // Method to update the content of the div
    updateContent(newContent) {
        this.element.textContent = newContent;
    }

    // Method to set event listeners
    addEventListener(eventType, callback) {
        this.element.addEventListener(eventType, callback);
    }

    // Method to remove the div from the DOM
    remove() {
        if (this.element.parentNode) {
            this.element.parentNode.removeChild(this.element);
        }
    }
}
