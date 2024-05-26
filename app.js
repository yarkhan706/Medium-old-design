window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    if (window.scrollY > 0) {
        header.style.backgroundColor = "white";
    } else {
        header.style.backgroundColor = "#ffc017";
    }
});