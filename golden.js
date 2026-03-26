function submitForm(e) {
  e.preventDefault();
  alert("Thank you. Your message has been submitted successfully.");
  e.target.reset();
}

function submitBooking(e) {
  e.preventDefault();

  const form = e.target;
  const checkin = new Date(form.checkin.value);
  const checkout = new Date(form.checkout.value);

  if (checkout <= checkin) {
    alert("Please select a check-out date that comes after the check-in date.");
    return;
  }

  alert("Thank you. Your booking request has been submitted successfully.");
  form.reset();
}

window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  const topBtn = document.getElementById("topBtn");

  if (window.scrollY > 60) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  if (window.scrollY > 350) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: "smooth"
    });
  }
}

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", function () {
  mainNav.classList.toggle("show");
});

document.querySelectorAll("#mainNav a").forEach(link => {
  link.addEventListener("click", function () {
    mainNav.classList.remove("show");
  });
});

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < windowHeight - 100) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// LIGHTBOX FUNCTION
function openLightbox(img) {
  const overlay = document.getElementById("lightboxOverlay");
  const lightboxImg = document.getElementById("lightboxImg");
  lightboxImg.src = img.src;
  overlay.style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightboxOverlay").style.display = "none";
}

// DATE PRICE ESTIMATOR
const roomPrices = {
  "Luxury Suite": 2850,
  "Family Lodge": 3950,
  "Exclusive Tent": 2250,
  "Presidential Villa": 6800,
  "Honeymoon Suite": 3400,
  "Desert Chalet": 3100
};

const bookingForm = document.querySelector(".booking-form");
const estimatedPriceEl = document.getElementById("estimatedPrice");

bookingForm.addEventListener("input", updatePriceEstimate);

function updatePriceEstimate() {
  const roomType = bookingForm.roomType.value;
  const checkin = new Date(bookingForm.checkin.value);
  const checkout = new Date(bookingForm.checkout.value);

  if (!roomType || isNaN(checkin) || isNaN(checkout) || checkout <= checkin) {
    estimatedPriceEl.textContent = "N$0";
    return;
  }

  const nights = Math.round((checkout - checkin) / (1000 * 60 * 60 * 24));
  const total = roomPrices[roomType] * nights;
  estimatedPriceEl.textContent = `N$${total.toLocaleString()}`;
}

const unavailableDates = [
  "2026-03-25",
  "2026-03-26",
  "2026-04-01",
  "2026-04-02"
];

flatpickr("#checkin", {
  dateFormat: "Y-m-d",
  minDate: "today",
  onDayCreate: function(dObj, dStr, fp, dayElem) {
    const date = dayElem.dateObj.toISOString().slice(0,10);
    if (unavailableDates.includes(date)) {
      dayElem.classList.add("unavailable-date");
      dayElem.disabled = true; // Prevent selection
    }
  }
});

flatpickr("#checkout", {
  dateFormat: "Y-m-d",
  minDate: "today",
  onDayCreate: function(dObj, dStr, fp, dayElem) {
    const date = dayElem.dateObj.toISOString().slice(0,10);
    if (unavailableDates.includes(date)) {
      dayElem.classList.add("unavailable-date");
      dayElem.disabled = true;
    }
  }
});

// FAQ toggle functionality
document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const question = item.querySelector("h4");
    question.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });
});

