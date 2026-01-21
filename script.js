// Mobile Menu Toggle (Simple)
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

// Smooth Scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission Alert
const form = document.getElementById('joinForm');
if(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Terima kasih! Lamaran bergabung Anda telah terkirim ke sistem internal.');
        form.reset();
    });
}
