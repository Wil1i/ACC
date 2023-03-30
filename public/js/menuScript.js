var closeBtn = document.getElementById("menuContainer-close")
var hamburgerMenu = document.getElementById("hamburgerMenu")
var menuContainer = document.getElementById("menuContainer")

closeBtn.addEventListener("click", () => {
    menuContainer.style.opacity = "0"
    setTimeout(() => {
        menuContainer.style.display = "none"
    }, 300);
})

hamburgerMenu.addEventListener("click", () => {
    menuContainer.style.display = "flex"
    setTimeout(() => {
        menuContainer.style.opacity = "1"
    }, 10);
})