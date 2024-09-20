'use strict';



/**
 * element toggle function
 */

const toggleElem = function (elem) { elem.classList.toggle("active"); }



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

for (let i = 0; i < navTogglers.length; i++) {
  navTogglers[i].addEventListener("click", function () {
    toggleElem(navbar);
    toggleElem(overlay);
  });
}


 // Review section
 const reviews = [
  { text: "The math classes here have significantly improved my understanding and grades.", author: "John D." },
  { text: "Excellent teachers who make complex topics easy to grasp.", author: "Sarah M." },
  { text: "I've seen a remarkable improvement in my problem-solving skills.", author: "Mike R." },
  { text: "The personalized attention has boosted my confidence in mathematics.", author: "Emily L." },
  { text: "A supportive learning environment that encourages questions and growth.", author: "David S." }
];

function createReviewCard(review) {
  const card = document.createElement('div');
  card.className = 'review-card';
  card.innerHTML = `
    <p class="review-text">"${review.text}"</p>
    <p class="review-author">- <strong>${review.author}</strong></p>
  `;
  return card;
}

function populateReviews() {
  const wrapper = document.getElementById('reviewWrapper');
  reviews.forEach(review => {
    wrapper.appendChild(createReviewCard(review));
  });
  // Duplicate reviews to create a seamless loop
  reviews.forEach(review => {
    wrapper.appendChild(createReviewCard(review));
  });
}

// Call this function when the DOM is loaded
document.addEventListener('DOMContentLoaded', populateReviews);

/**
 * header sticky & back to top button
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
    header.classList.add("header-anim");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
    header.classList.remove("header-anim");
  }
});



/**
 * search box toggle
 */

const searchTogglers = document.querySelectorAll("[data-search-toggler]");
const searchBox = document.querySelector("[data-search-box]");

for (let i = 0; i < searchTogglers.length; i++) {
  searchTogglers[i].addEventListener("click", function () {
    toggleElem(searchBox);
  });
}

/**
 * More Testimonials
 */

// script.js

const slidesContainer = document.querySelector('.inner');
const slides = document.querySelectorAll('.col');
const visibleSlides = 4; // Number of visible slides at once
const slideWidth = 200; // Width of each slide
const slideInterval = 5000; // Interval for sliding in milliseconds

// Clone the first few slides and append them to the end
function cloneSlides() {
  const cloneCount = visibleSlides; // Number of slides to clone
  const firstSlides = Array.from(slides).slice(0, cloneCount);
  firstSlides.forEach(slide => {
    slidesContainer.appendChild(slide.cloneNode(true));
  });
}

// Initialize slider width and start sliding
function initSlider() {
  cloneSlides(); // Clone slides
  const totalSlides = slidesContainer.children.length; // Updated total slides including clones

  // Update the width of the slidesContainer to include cloned slides
  slidesContainer.style.width = `${slideWidth * totalSlides}px`;

  let currentIndex = 0;

  function startSliding() {
    setInterval(() => {
      currentIndex = (currentIndex + 1) % (totalSlides - visibleSlides + 1); // Loop through slides
      const newTransformValue = -100 * currentIndex / (totalSlides - visibleSlides + 1) + '%';
      slidesContainer.style.transform = `translateX(${newTransformValue})`;
      
      // Reset the position when the last original slide reaches
      if (currentIndex === totalSlides - visibleSlides) {
        setTimeout(() => {
          slidesContainer.style.transition = 'none'; // Remove transition
          slidesContainer.style.transform = `translateX(0)`; // Reset position
          
          currentIndex = 0; // Reset index
          
          // Force reflow to apply the changes
          slidesContainer.offsetHeight; 
          
          // Add transition back
          slidesContainer.style.transition = 'transform 1s ease';
        }, slideInterval);
      }
    }, slideInterval); // Slide every 4 seconds
  }

  startSliding();
}

initSlider();





/**
 * whishlist button toggle
 */

const whishlistBtns = document.querySelectorAll("[data-whish-btn]");

for (let i = 0; i < whishlistBtns.length; i++) {
  whishlistBtns[i].addEventListener("click", function () {
    toggleElem(this);
  });
}