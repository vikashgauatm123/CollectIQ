// AOS Initialization
AOS.init({ duration: 1000, once: true });

// Toggle Menu
function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("active");
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Hero Image + Text Slider
const slides = [
  {
    image: "asset/background.jpg",
    heading1: "Collect",
    heading2: "IQ",
    subheading: "Debt Solution",
    description: "A unique combination of seamless delivery, advanced analytics, and automated strategies."
  },
  {
    image: "asset/financeslide.jpg",
    heading1: "Smart",
    heading2: "Finance",
    subheading: "Optimized Lending",
    description: "We help lenders use automation and AI for higher recovery and lower risk."
  },
  {
    image: "asset/dataslide.avif",
    heading1: "Data",
    heading2: "Driven",
    subheading: "Recovery Intelligence",
    description: "Turning insights into actions using behavioral science and AI."
  }
];

let index = 0;

function updateSlide() {
  const current = slides[index];
  document.getElementById("content").style.backgroundImage = `url(${current.image})`;
  document.getElementById("heading1").innerText = current.heading1;
  document.getElementById("heading2").innerText = current.heading2;
  document.getElementById("subheading").innerText = current.subheading;
  document.getElementById("description").innerText = current.description;

  index = (index + 1) % slides.length;
}

updateSlide();
setInterval(updateSlide, 5000); // Change every 5 seconds
