const showBoxBtn = document.getElementById("showBoxBtn");
const closeBoxBtn = document.getElementById("closeBoxBtn");
const boxContainer = document.getElementById("boxContainer");
const content = document.getElementById("content");
const loginBtn = document.querySelector(".btn");

// Select all anchor elements in the page
const links = content.querySelectorAll("a:not(.btn)");

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // Show error message
    document.getElementById("error-message").style.display = "block";
}

links.forEach((link) => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        boxContainer.style.display = "block";
        content.style.filter = "blur(8px)";
    });
});

closeBoxBtn.addEventListener("click", function () {
    boxContainer.style.display = "none";
    content.style.filter = "none";
});

loginBtn.addEventListener("click", function () {
    window.location.href = "login.html";
});
