<<<<<<< HEAD
const menuToggle = document.getElementById("menu-toggle");

const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function () {

  navLinks.classList.toggle("active");

});


const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function(item){

  item.addEventListener("click", function(){

    navLinks.classList.remove("active");

  });

});



/* TYPING EFFECT */

const title = document.getElementById("typing-title");



const titleText = "Future of AI Experience";





let i = 0;

function typeTitle(){

  if(i < titleText.length){

    title.innerHTML += titleText.charAt(i);

    i++;

    setTimeout(typeTitle, 80);

  }

}

window.onload = typeTitle();



=======
const menuToggle = document.getElementById("menu-toggle");

const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function () {

  navLinks.classList.toggle("active");

});


const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function(item){

  item.addEventListener("click", function(){

    navLinks.classList.remove("active");

  });

});



/* TYPING EFFECT */

const title = document.getElementById("typing-title");



const titleText = "Future of AI Experience";





let i = 0;

function typeTitle(){

  if(i < titleText.length){

    title.innerHTML += titleText.charAt(i);

    i++;

    setTimeout(typeTitle, 80);

  }

}

window.onload = typeTitle();



>>>>>>> fa9c35069be347df2f938e861a3d49c4fcc037ea
