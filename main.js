// AOS Initialization
AOS.init({ duration: 1000, once: true });

// Toggle Hamburger
function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("show");
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    document.getElementById("nav-links").classList.remove("show"); // close menu after click
  });
});

// Hero Slider
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
setInterval(updateSlide, 5000);

// ===========================
// 💬 Client-side Chat Popup (JS functions)
// ===========================
function togglePopup() {
  const popup = document.getElementById("popupBox");
  popup.style.display = popup.style.display === "flex" ? "none" : "flex";
}

function openBotChat() {
  document.getElementById("chatbox").style.display = "block";
}

function closeChat() {
  document.getElementById("chatbox").style.display = "none";
}

async function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (!message) return;

  appendMessage("You", message);
  input.value = "";

  try {
    const response = await fetch('http://localhost:5000/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    });

    const data = await response.json();
    appendMessage("Laxa", data.reply);
  } catch (error) {
    appendMessage("Error", "Failed to get response.");
  }
}

function appendMessage(sender, text) {
  const chat = document.getElementById("chat-messages");
  const msg = document.createElement("div");
  msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
  msg.style.margin = "6px 0";
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}


