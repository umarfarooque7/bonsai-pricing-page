// product js 
const DropdownLink = document.getElementById("nav-link");
const dropdownContainer = document.getElementById("dropdown1");

DropdownLink.addEventListener("click", function () {
    dropdownContainer.classList.toggle("dropdown-toggle");
    
});
  

// Template js 
const dropdownContainerTwo = document.getElementById("dropdown2");
const dropdowntemplate = document.getElementById("templates");

dropdowntemplate.addEventListener("click", function () {
    dropdownContainerTwo.classList.toggle("dropdown-toggle");

})

// Hamburger js
const hamburger = document.querySelector(".hamburger");
const bar = document.querySelector(".bars");
const cross = document.querySelector(".cross");


hamburger.addEventListener("click", function () {

    console.log("Hello World!")
    bar.style.display = 'none'
    cross.style.display = 'block'

});