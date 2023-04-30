let mouseCursor = document.querySelector(".cursor");

function cursor(e) {
    mouseCursor.style.left = e.pageX + "px";
    mouseCursor.style.top = e.pageY - scrollY + "px";
}

window.addEventListener("scroll", cursor);
window.addEventListener("mousemove", cursor);