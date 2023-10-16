/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable no-loop-func */
/* eslint-disable no-param-reassign */
let timeOut = setInterval(slideDivs, 5000);
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function currentSlideOp(){
  currentSlide = (currentSlide + 1) % slides.length
}

// Forward arrow
document.querySelector(".navigation").addEventListener("click", ()=>{
  clearInterval(timeOut); // Clear any existing timer
  timeOut = setInterval(slideDivs, 5000); // Set a new timer
  
  document.querySelector(".slide1").style.display = "none"
  document.querySelector(".navigation").opacity = "block"
  currentSlideOp()
  for (let i = 0; i < slides.length; i+=1) {  
    // Resets the bacgroundcolor of the dots
    document.querySelector(`.dot${i}`).style.backgroundColor = "white"

    document.querySelector(".navigation").opacity = 1 
    if (i === currentSlide) {
      slides[i].classList.add("active")
      document.querySelector(".navigation").opacity = 1
      slides[i].style.display = "block"
      document.querySelector(`.dot${i}`).style.backgroundColor = slides[i].style.background
    }else{      
      slides[i].classList.remove("active")
    }
  }
  console.log(slides)
}); 

// Backward arrow
document.querySelector(".navigation-back").addEventListener("click", ()=>{
  clearInterval(timeOut); // Clear any existing timer
  timeOut = setInterval(slideDivs, 5000); // Set a new timer

  document.querySelector(".slide1").style.display = "none"
  document.querySelector(".navigation").opacity = "block"
  currentSlide -= 1
  if (currentSlide < 0) {
    currentSlide += slides.length
  }
  for (let i = 0; i < slides.length; i+=1) {  
    // Resets the bacgroundcolor of the dots
    document.querySelector(`.dot${i}`).style.backgroundColor = "white"

    document.querySelector(".navigation").opacity = 1 
    if (i === currentSlide) {
      slides[i].classList.add("active")
      document.querySelector(".navigation").opacity = 1
      slides[i].style.display = "block"
      document.querySelector(`.dot${i}`).style.backgroundColor = slides[i].style.background
    }else{      
      slides[i].classList.remove("active")
    }
  }
  console.log(currentSlide)
}); 

//  Individual dots

document.querySelector(".dot0").addEventListener("click", ()=>{
  clearInterval(timeOut); // Clear any existing timer
  timeOut = setInterval(slideDivs, 5000); // Set a new timer
  currentSlide = 0 
  //  color change for the dots
  document.querySelector(".dot0").style.backgroundColor = "red"
  document.querySelector(".dot1").style.backgroundColor = "white"
  document.querySelector(".dot2").style.backgroundColor = "white"
  // Slide change
  document.querySelector(".slide1").style.display = "none"
  slides[0].style.display = "block"
  slides[0].classList.add("active")
  slides[1].classList.remove("active")
  slides[2].classList.remove("active")
})

document.querySelector(".dot1").addEventListener("click", ()=>{
  clearInterval(timeOut); // Clear any existing timer
  timeOut = setInterval(slideDivs, 5000);
  currentSlide = 1
  //  color change for the dots
  document.querySelector(".dot1").style.backgroundColor = "green"
  document.querySelector(".dot0").style.backgroundColor = "white"
  document.querySelector(".dot2").style.backgroundColor = "white"
  // Slide change
  document.querySelector(".slide1").style.display = "none"
  slides[1].style.display = "block"
  slides[1].classList.add("active")
  slides[0].classList.remove("active")
  slides[2].classList.remove("active")
})
document.querySelector(".dot2").addEventListener("click", ()=>{
  clearInterval(timeOut); // Clear any existing timer
  timeOut = setInterval(slideDivs, 5000);
  currentSlide = 2
  //  color change for the dots
  document.querySelector(".dot2").style.backgroundColor = "yellow"
  document.querySelector(".dot1").style.backgroundColor = "white"
  document.querySelector(".dot0").style.backgroundColor = "white"
  // Slide change
  document.querySelector(".slide1").style.display = "none"
  slides[2].style.display = "block"
  slides[2].classList.add("active")
  slides[1].classList.remove("active")
  slides[0].classList.remove("active")
})


function slideDivs(){
  document.querySelector(".slide1").style.display = "none"
  document.querySelector(".navigation").opacity = "block"
  currentSlideOp()
  for (let i = 0; i < slides.length; i+=1) {  
    // Resets the bacgroundcolor of the dots
    document.querySelector(`.dot${i}`).style.backgroundColor = "white"

    document.querySelector(".navigation").opacity = 1 
    if (i === currentSlide) {
      slides[i].classList.add("active")
      document.querySelector(".navigation").opacity = 1
      slides[i].style.display = "block"
      document.querySelector(`.dot${i}`).style.backgroundColor = slides[i].style.background
    }else{      
      slides[i].classList.remove("active")
    }
  }
}





