// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        question.classList.toggle('active');
        const answer = question.nextElementSibling;

        if (question.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
            answer.style.maxHeight = '0';
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });

            navLinks.classList.remove('active');
        }
    });
});

// Animation on scroll
const fadeElements = document.querySelectorAll('.fade-in');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeObserver.observe(el);
});

// Form validation and submission
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let isValid = true;

    document.querySelectorAll('.error-message').forEach(el => {
        el.style.display = 'none';
    });

    const name = document.getElementById('name');
    if (name.value.trim() === '') {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }

    const email = document.getElementById('email');
    if (email.value.trim() === '' || !email.value.includes('@')) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    const subject = document.getElementById('subject');
    if (subject.value === '') {
        document.getElementById('subjectError').style.display = 'block';
        isValid = false;
    }

    const message = document.getElementById('message');
    if (message.value.trim() === '') {
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        contactForm.reset();
    } else {
        formFeedback.textContent = 'Por favor, corrija os erros no formulário.';
        formFeedback.className = 'form-feedback error';
        formFeedback.style.display = 'block';
    }
});

// Login/Register Modal Functionality
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const closeLogin = document.getElementById('closeLogin');
const closeRegister = document.getElementById('closeRegister');
const switchToRegister = document.getElementById('switchToRegister');
const switchToLogin = document.getElementById('switchToLogin');

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.style.display = 'flex';
});

registerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    registerModal.style.display = 'flex';
});

closeLogin.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

closeRegister.addEventListener('click', () => {
    registerModal.style.display = 'none';
});

switchToRegister.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.style.display = 'none';
    registerModal.style.display = 'flex';
});

switchToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    registerModal.style.display = 'none';
    loginModal.style.display = 'flex';
});

window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
    if (e.target === registerModal) {
        registerModal.style.display = 'none';
    }
});

// Form validation for login
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    document.querySelectorAll('#loginForm .error-message').forEach(el => {
        el.style.display = 'none';
    });

    const loginEmail = document.getElementById('loginEmail');
    if (!loginEmail.value || !loginEmail.value.includes('@')) {
        document.getElementById('loginEmailError').style.display = 'block';
        isValid = false;
    }

    const loginPassword = document.getElementById('loginPassword');
    if (!loginPassword.value) {
        document.getElementById('loginPasswordError').style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        alert('Login realizado com sucesso!');
        loginModal.style.display = 'none';
        loginForm.reset();
    }
});

// Form validation for register
const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    document.querySelectorAll('#registerForm .error-message').forEach(el => {
        el.style.display = 'none';
    });

    const registerName = document.getElementById('registerName');
    if (!registerName.value) {
        document.getElementById('registerNameError').style.display = 'block';
        isValid = false;
    }

    const registerEmail = document.getElementById('registerEmail');
    if (!registerEmail.value || !registerEmail.value.includes('@')) {
        document.getElementById('registerEmailError').style.display = 'block';
        isValid = false;
    }

    const registerPassword = document.getElementById('registerPassword');
    if (!registerPassword.value) {
        document.getElementById('registerPasswordError').style.display = 'block';
        isValid = false;
    }

    const registerConfirmPassword = document.getElementById('registerConfirmPassword');
    if (registerPassword.value !== registerConfirmPassword.value) {
        document.getElementById('registerConfirmPasswordError').style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        alert('Cadastro realizado com sucesso! Você pode fazer login agora.');
        registerModal.style.display = 'none';
        registerForm.reset();
    }
});
