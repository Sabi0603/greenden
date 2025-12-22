let sideNav = document.getElementById("sideNav");
let menuIcon = document.getElementById("menuIcon");
let closeNav = document.getElementById("closeNav");
let productContainer = document.getElementById("productContainer");
let search = document.getElementById("search");
let productList = productContainer.querySelectorAll("div");

menuIcon.addEventListener("click", function () {
    sideNav.style.right = 0;
});

closeNav.addEventListener("click", function () {
    sideNav.style.right = "-50%";
})

search.addEventListener('keyup', function () {
    let enteredValue = event.target.value.toUpperCase();

    for (let count = 0; count < productList.length; count++) {
        let productName = productList[count].querySelector("h1").textContent;

        if (productName.toUpperCase().indexOf(enteredValue) < 0) {
            productList[count].style.display = "none";
        } else {
            productList[count].style.display = "block";
        }
    }
})