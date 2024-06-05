const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
const navBar = document.getElementById("navBar");
const mySideNav = document.getElementById("mySideNav");
const mainDocument = document.getElementById("main");
const iconBar = document.getElementById("iconBar");
const productMenu = document.getElementById("products");
const aboutMenu = document.getElementById("about");

// function openNav(x) {
//     document.getElementById("mySideNav").style.width = "250px";
//     x.classList.toggle("change");
// }

function openNav() {
    mySideNav.style.width = "250px";
    mainDocument.style.marginLeft = "250px";
    navBar.classList.remove("navBar");
    navBar.classList.add("change");

    document.addEventListener("click", function(event) {
        if (event.target.matches(".closebtn") || !event.target.closest(".sideNav")) {
            closeSideNav();
        }
    }, true)
}

function closeNav() {
    mySideNav.style.width = "0";
    productMenu.style.width = "0";
    aboutMenu.style.width = "0";
    mainDocument.style.marginLeft = "0";
    navBar.classList.remove("change");
    navBar.classList.add("navBar");
}

// function openIconBar() {
//     iconBar.style.width = "90px";
// }

// function closeIconBar() {
//     iconBar.style.width = "0";
// }

function openProducts() {
    mySideNav.style.width = "250px";
    productMenu.style.width = "250px";
    mainDocument.style.marginLeft = "250px";
}

function closeProducts() {
    mySideNav.style.width = "250px";
    productMenu.style.width = "0";
    mainDocument.style.marginLeft = "250px";
}

function openAbout() {
    mySideNav.style.width = "250px";
    aboutMenu.style.width = "250px";
    mainDocument.style.marginLeft = "250px";
}

function closeAbout() {
    mySideNav.style.width = "250px";
    aboutMenu.style.width = "0";
    mainDocument.style.marginLeft = "250px";
}

window.onscroll = function() {stickyNavbar()};

var nav = document.getElementById("nav");
var sticky = nav.offsetTop;

function stickyNavbar() {
    if (window.pageYOffset >= sticky) {
        nav.classList.add("sticky")
    } else {
        nav.classList.remove("sticky");
    }
}

// function showNarbar(x) {

// }

function closeSideNav() {
    document.querySelector(".sideNav").style.width = "0";
    mainDocument.style.marginLeft = "0";
    navBar.classList.remove("change");
    navBar.classList.add("navBar");
}

document.addEventListener("click", function(event) {
    if(event.target.matches(".navBar")) {
        openSideNav();
    }
})

function openSideNav() {
    document.querySelector(".sideNav").style.width = "250px";
}

const products = [{
    id: 1,
    title: "Air Force",
    price: 3500,
    colors: [{
        code: "black",
        img: "./img/air.png",
    }, {
        code: "darkblue",
        img: "./img/air2.png",
    },],
}, {
    id: 2,
    title: "Air Jordan",
    price: 4500,
    colors: [{
        code: "lightgray",
        img: "./img/jordan.png",
    }, {
        code: "green",
        img: "./img/jordan2.png",
    },],
}, {
    id: 3,
    title: "Blazer",
    price: 3800,
    colors: [{
        code: "lightgray",
        img: "./img/blazer.png",
    }, {
        code: "green",
        img: "./img/blazer2.png",
    },],
}, {
    id: 4,
    title: "Crater",
    price: 4000,
    colors: [{
        code: "black",
        img: "./img/crater.png",
    }, {
        code: "lightgray",
        img: "./img/crater2.png",
    },],
}, {
    id: 5,
    title: "Hippie",
    price: 3200,
    colors: [{
        code: "gray",
        img: "./img/hippie.png",
    }, {
        code: "black",
        img: "./img/hippie2.png",
    },],
},];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle"); 
const currentProductPrice = document.querySelector(".productPrice"); 
const currentProductColors = document.querySelectorAll(".color"); 
const currentProductSizes = document.querySelectorAll(".size"); 

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        // Change Current Slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        // Change Choosing Product
        choosenProduct = products[index];

        // Change Text of Current Product
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "KSH. " + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        // Change Style for Each Product
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        })
    })
})

// Changing the Shoe Color
currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img;
    })
})

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        })

        size.style.backgroundColor = "black";
        size.style.color = "white";
    })
})

// const productButton = document.querySelector(".productButton");
// const payment = document.querySelector(".payment");
// const paymentId = document.getElementById("#payment")
// const close = document.querySelector(".close");

// productButton.addEventListener("click", () => {
//     payment.style.display = "flex";
// })

// close.addEventListener("click", () => {
//     payment.style.display = "none";
// })



