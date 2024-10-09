class View {
    constructor(width, height, backgroundColor, content) {
        this.div = document.createElement('div');
        this.div.style.width = width;
        this.div.style.height = height;
        this.div.style.backgroundColor = backgroundColor;
        this.div.textContent = content || '';

        // Set styles for positioning and make div movable and resizable
        this.div.style.position = 'absolute';
        this.div.style.left = '0px';
        this.div.style.top = '0px';

        this.div.classList.add("movable");
        this.div.classList.add("resizable");

        // Adding Movable Property
        this.div.addEventListener("mousedown", (e) => {
            e.stopPropagation();
            if (e.target.classList.contains('resizer')) return; // Ignore if clicking the resizer

            currentSelectedContainer=this.div.id

            e.preventDefault();
            const parentRect = this.div.parentNode.getBoundingClientRect();
            const shiftX = e.clientX - this.div.getBoundingClientRect().left;
            const shiftY = e.clientY - this.div.getBoundingClientRect().top;

            const moveAt = (pageX, pageY) => {
                const newLeft = pageX - parentRect.left - shiftX;
                const newTop = pageY - parentRect.top - shiftY;

                // Constrain movement within parent bounds
                const maxLeft = parentRect.width - this.div.offsetWidth;
                const maxTop = parentRect.height - this.div.offsetHeight;

                this.div.style.left = Math.max(0, Math.min(newLeft, maxLeft)) + "px";
                this.div.style.top = Math.max(0, Math.min(newTop, maxTop)) + "px";
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

        this.div.ondragstart = function () {
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
            const startWidth = parseInt(document.defaultView.getComputedStyle(this.div).width, 10);
            const startHeight = parseInt(document.defaultView.getComputedStyle(this.div).height, 10);

            const resize = (e) => {
                this.div.style.width = startWidth + (e.clientX - startX) + "px";
                this.div.style.height = startHeight + (e.clientY - startY) + "px";
            };

            const stopResize = () => {
                document.removeEventListener("mousemove", resize);
                document.removeEventListener("mouseup", stopResize);
            };

            // Attach the listeners to `mousemove` and `mouseup` events
            document.addEventListener("mousemove", resize);
            document.addEventListener("mouseup", stopResize);
        });

        this.div.appendChild(resizer);
    }

    // Method to add the div to the page
    appendTo(parentSelector) {
        const parent = document.querySelector(parentSelector);
        if (parent) {
            parent.appendChild(this.div);
        } else {
            console.error(`Parent element '${parentSelector}' not found.`);
        }
    }

    // Method to update the content of the div
    updateContent(newContent) {
        this.div.textContent = newContent;
    }

    // Method to set event listeners
    addEventListener(eventType, callback) {
        this.div.addEventListener(eventType, callback);
    }

    // Method to remove the div from the DOM
    remove() {
        if (this.div.parentNode) {
            this.div.parentNode.removeChild(this.div);
        }
    }
}
