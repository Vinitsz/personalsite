document.addEventListener("DOMContentLoaded", function() {
    const nameElement = document.getElementById("name");
    const cursorElement = document.querySelector(".cursor");
    const name = "VINIT ZANJE";
    let index = 0;
    let isAdding = true;

    function type() {
        if (isAdding) {
            if (index < name.length) {
                nameElement.textContent += name[index++];
                setTimeout(type, 200);
            } else {
                isAdding = false;
                setTimeout(type, 2000);
            }
        } else {
            if (index > 0) {
                nameElement.textContent = name.substring(0, --index);
                setTimeout(type, 100);
            } else {
                isAdding = true;
                setTimeout(type, 200);
            }
        }
    }

    type();
});
