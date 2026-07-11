// Load Navbar
fetch("navbar.html")
.then(response => response.text())
.then(data => {
    document.getElementById("navbar").innerHTML = data;
});

// Load Footer
fetch("footer.html")
.then(response => response.text())
.then(data => {
    document.getElementById("footer").innerHTML = data;
});

// Mobile Menu
function showMenu() {
    document.getElementById("navLinks").style.right = "0";
}

function hideMenu() {
    document.getElementById("navLinks").style.right = "-200px";
}