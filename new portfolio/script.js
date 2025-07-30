const roles = [
  " I'm a Full Stack Developer",
  "I'm a UI/UX Developer",
  "I'm a Annual Report Writer"
];

let currentRole = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById("typing");

function typeEffect() {
  const currentText = roles[currentRole];
  
  if (isDeleting) {
    charIndex--;
    typingElement.textContent = currentText.substring(0, charIndex);
  } else {
    charIndex++;
    typingElement.textContent = currentText.substring(0, charIndex);
  }

  if (!isDeleting && charIndex === currentText.length) {
    setTimeout(() => isDeleting = true, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    currentRole = (currentRole + 1) % roles.length;
  }

  setTimeout(typeEffect, isDeleting ? 100 : 150);
}

typeEffect();
  function toggleMenu() {
      var nav = document.getElementById('navLinks');
      nav.classList.toggle('active');
    }
     function toggleMenu() {
      var nav = document.getElementById('navLinks');
      nav.classList.toggle('active');
    }
     function toggleMenu() {
      var nav = document.getElementById('navLinks');
      nav.classList.toggle('active');
    }
     function toggleMenu() {
      var nav = document.getElementById('navLinks');
      nav.classList.toggle('active');
    }

    function showTab(event, tab) {
      var tabs = document.querySelectorAll('.tab-content');
      tabs.forEach(function(content) {
        content.style.display = 'none';
      });
      document.getElementById(tab).style.display = 'block';

      var buttons = document.querySelectorAll('.tab-btn');
      buttons.forEach(function(btn) {
        btn.classList.remove('active');
      });
      event.currentTarget.classList.add('active');
    }
      function toggleMenu() {
      var nav = document.getElementById('navLinks');
      nav.classList.toggle('active');
    }
      function toggleMenu() {
      var nav = document.getElementById('navLinks');
      nav.classList.toggle('active');
    }
     function toggleMenu() {
      var nav = document.getElementById('navLinks');
      nav.classList.toggle('active');
    }