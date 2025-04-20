// Cursor blob effect
document.addEventListener('mousemove', (e) => {
const blob = document.getElementById('cursor-blob');
const { clientX, clientY } = e;
blob.style.left = `${clientX}px`;
blob.style.top = `${clientY}px`;
});
// Theme Toggle
const body = document.body;
const themeToggleDesktop = document.getElementById('theme-toggle-desktop');
const themeToggleMobile = document.getElementById('theme-toggle-mobile');
const starsContainer = document.getElementById('stars');
const particlesContainer = document.getElementById('light-particles');

function toggleTheme() {
if (body.classList.contains('theme-light')) {
body.classList.remove('theme-light');
body.classList.add('theme-dark');
localStorage.setItem('theme', 'dark');
// Update background elements
generateStars();
updateContactSectionVisibility('dark');
} else {
body.classList.remove('theme-dark');
body.classList.add('theme-light');
localStorage.setItem('theme', 'light');
// Update background elements
generateParticles();
updateContactSectionVisibility('light');
}
}

// Initialize theme toggles
themeToggleDesktop.addEventListener('change', toggleTheme);
themeToggleMobile.addEventListener('change', toggleTheme);

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
body.classList.remove('theme-light');
body.classList.add('theme-dark');
themeToggleDesktop.checked = true;
themeToggleMobile.checked = true;
// Initialize stars for dark mode
generateStars();
updateContactSectionVisibility('dark');
} else {
body.classList.remove('theme-dark');
body.classList.add('theme-light');
themeToggleDesktop.checked = false;
themeToggleMobile.checked = false;
// Initialize particles for light mode
generateParticles();
updateContactSectionVisibility('light');
}

// Function to update contact section visibility based on theme
function updateContactSectionVisibility(theme) {
const lightShapes = document.querySelector('.light-contact-shapes');
const darkParticles = document.querySelector('.dark-contact-particles');
if (theme === 'dark') {
lightShapes.classList.add('hidden');
darkParticles.classList.remove('hidden');
} else {
lightShapes.classList.remove('hidden');
darkParticles.classList.add('hidden');
}
}

// Mobile Menu
const mobileMenuButton = document.getElementById('mobile-menu-button');
const closeMenuButton = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuButton.addEventListener('click', () => {
mobileMenu.classList.add('open');
});
closeMenuButton.addEventListener('click', () => {
mobileMenu.classList.remove('open');
});
mobileMenuLinks.forEach(link => {
link.addEventListener('click', () => {
mobileMenu.classList.remove('open');
});
});
// Portfolio Filter
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
filterButtons.forEach(button => {
button.addEventListener('click', () => {
// Remove active class from all buttons
filterButtons.forEach(btn => {
btn.classList.remove('active', 'bg-primary', 'text-white');
btn.classList.add('bg-white', 'text-gray-700', 'border', 'border-gray-200', 'hover:border-primary', 'hover:text-primary');
});
// Add active class to clicked button
button.classList.add('active', 'bg-primary', 'text-white');
button.classList.remove('bg-white', 'text-gray-700', 'border', 'border-gray-200', 'hover:border-primary', 'hover:text-primary');
const filter = button.getAttribute('data-filter');
// Filter projects
projectCards.forEach(card => {
if (filter === 'all' || card.getAttribute('data-category') === filter) {
card.style.display = 'block';
} else {
card.style.display = 'none';
}
});
});
});
// Experience Read More
const experienceReadMoreButtons = document.querySelectorAll('.read-more');
experienceReadMoreButtons.forEach(button => {
button.addEventListener('click', () => {
const content = button.previousElementSibling;
if (content.classList.contains('hidden')) {
content.classList.remove('hidden');
button.innerHTML = '<span>Read Less</span><i class="ri-arrow-up-s-line ml-1"></i>';
} else {
content.classList.add('hidden');
button.innerHTML = '<span>Read More</span><i class="ri-arrow-down-s-line ml-1"></i>';
}
});
});
// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
if (window.pageYOffset > 300) {
backToTopButton.classList.remove('opacity-0', 'invisible');
backToTopButton.classList.add('opacity-100', 'visible');
} else {
backToTopButton.classList.remove('opacity-100', 'visible');
backToTopButton.classList.add('opacity-0', 'invisible');
}
});
backToTopButton.addEventListener('click', () => {
window.scrollTo({
top: 0,
behavior: 'smooth'
});
});
// Generate Stars for Dark Mode
function generateStars() {
starsContainer.innerHTML = ''; // Clear existing stars
for (let i = 0; i < 100; i++) {
const star = document.createElement('div');
star.classList.add('star');
// Random position
const x = Math.random() * 100;
const y = Math.random() * 100;
// Random size
const size = Math.random() * 3;
// Random duration and opacity
const duration = 2 + Math.random() * 3;
const opacity = 0.5 + Math.random() * 0.5;
star.style.left = `${x}%`;
star.style.top = `${y}%`;
star.style.width = `${size}px`;
star.style.height = `${size}px`;
star.style.setProperty('--duration', `${duration}s`);
star.style.setProperty('--opacity', opacity);
starsContainer.appendChild(star);
}
}
// Generate Light Particles for Light Mode
function generateParticles() {
particlesContainer.innerHTML = ''; // Clear existing particles
for (let i = 0; i < 30; i++) {
const particle = document.createElement('div');
particle.classList.add('particle');
// Random position
const x = Math.random() * 100;
const y = Math.random() * 100;
// Random size (larger than stars)
const size = 10 + Math.random() * 40;
// Random duration
const floatDuration = 15 + Math.random() * 20;
particle.style.left = `${x}%`;
particle.style.top = `${y}%`;
particle.style.width = `${size}px`;
particle.style.height = `${size}px`;
particle.style.setProperty('--float-duration', `${floatDuration}s`);
particlesContainer.appendChild(particle);
}
}
// Initialize backgrounds
generateStars();
generateParticles();
// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
e.preventDefault();
const targetId = this.getAttribute('href');
const targetElement = document.querySelector(targetId);
if (targetElement) {
window.scrollTo({
top: targetElement.offsetTop - 80,
behavior: 'smooth'
});
}
});
});
// Project Modal Functionality
const projectModal = document.getElementById('project-modal');
const projectModalContent = document.getElementById('project-modal-content');
const projectModalOverlay = document.getElementById('project-modal-overlay');
const closeProjectModal = document.getElementById('close-project-modal');
const viewProjectButtons = document.querySelectorAll('.view-project-btn');
function openProjectModal(projectId) {
const project = projectsData[projectId];
if (!project) return;
projectModalContent.innerHTML = `
<div class="theme-light">
<div class="mb-6">
<img src="${project.image}" alt="${project.title}" class="w-full h-64 object-cover rounded-lg">
</div>
<h2 class="text-3xl font-bold text-primary mb-2">${project.title}</h2>
<p class="text-xl text-gray-600 mb-6">${project.subtitle}</p>
<div class="mb-6">
<h3 class="text-lg font-semibold mb-2">Technologies</h3>
<div class="flex flex-wrap gap-2">
${project.technologies.map(tech => `<span class="bg-primary bg-opacity-10 text-primary px-3 py-1 rounded-full">${tech}</span>`).join('')}
</div>
</div>
<div class="prose max-w-none">
${project.description}
</div>
</div>
`;
projectModal.classList.remove('hidden');
document.body.style.overflow = 'hidden';
}
function closeProjectModalHandler() {
projectModal.classList.add('hidden');
document.body.style.overflow = '';
}
viewProjectButtons.forEach(button => {
button.addEventListener('click', () => {
const projectId = button.getAttribute('data-project-id');
openProjectModal(projectId);
});
});
closeProjectModal.addEventListener('click', closeProjectModalHandler);
projectModalOverlay.addEventListener('click', closeProjectModalHandler);
// Experience Modal Functionality
const experienceModal = document.getElementById('experience-modal');
const experienceModalContent = document.getElementById('experience-modal-content');
const experienceModalOverlay = document.getElementById('experience-modal-overlay');
const closeExperienceModal = document.getElementById('close-experience-modal');
const experienceModalReadMoreButtons = document.querySelectorAll('.read-more');
function openExperienceModal(experienceId) {
const experience = experienceData[experienceId];
if (!experience) return;
experienceModalContent.innerHTML = `
<div class="theme-light">
<div class="mb-6">
<img src="${experience.image}" alt="${experience.title} at ${experience.company}" class="w-full h-64 object-cover rounded-lg">
</div>
<div class="flex justify-between items-start mb-6">
<div>
<h2 class="text-3xl font-bold text-primary mb-2">${experience.title}</h2>
<h3 class="text-xl text-primary mb-1">${experience.company}</h3>
<p class="text-gray-600">${experience.location}</p>
</div>
<span class="bg-primary text-white px-3 py-1 rounded-lg">${experience.period}</span>
</div>
<div class="prose max-w-none">
${experience.description}
</div>
</div>
`;
experienceModal.classList.remove('hidden');
document.body.style.overflow = 'hidden';
}
function closeExperienceModalHandler() {
experienceModal.classList.add('hidden');
document.body.style.overflow = '';
}
experienceModalReadMoreButtons.forEach(button => {
button.addEventListener('click', () => {
const experienceId = button.getAttribute('data-experience-id');
openExperienceModal(experienceId);
});
});
closeExperienceModal.addEventListener('click', closeExperienceModalHandler);
experienceModalOverlay.addEventListener('click', closeExperienceModalHandler);
// Contact Form Handling
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');
const formError = document.getElementById('form-error');
let submitted = false;

// Add event listeners for close buttons
document.querySelectorAll('.close-message').forEach(button => {
  button.addEventListener('click', function() {
    this.closest('div[id^="form-"').classList.add('hidden');
    // Clear form inputs when closing the success message
    contactForm.reset();
  });
});

// Handle form submission
function handleFormSubmit(form) {
  submitted = true;
  
  // Get the submit button
  const submitButton = form.querySelector('button[type="submit"]');
  const originalButtonText = submitButton.textContent;
  
  // Show loading state
  submitButton.textContent = 'Sending...';
  submitButton.disabled = true;

  // Reset button state after submission completes
  setTimeout(() => {
    submitButton.textContent = originalButtonText;
    submitButton.disabled = false;
  }, 1000);

  return true;
}

// Handle form response
function handleFormResponse() {
  if (submitted) {
    // Show success message
    formSuccess.classList.remove('hidden');
    
    // Reset submitted flag
    submitted = false;
  }
}

// Make functions available globally
window.handleFormSubmit = handleFormSubmit;
window.handleFormResponse = handleFormResponse; 