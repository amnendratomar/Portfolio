// Navbar 

let menuBar = document.getElementById("menu-bar");
let crossBar = document.getElementById("cross-bar");
let navBar = document.getElementById("nav-bar")

menuBar.addEventListener('click', () => {
    navBar.style.right = "0"
})
crossBar.addEventListener('click', () => {
    navBar.style.right = "-250px";
})

// 