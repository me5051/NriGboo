// Scroll reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// WhatsApp Reservation
function sendToWhatsApp() {
    const name = document.querySelector('input[type="text"]').value;
    const phone = document.querySelector('input[type="tel"]').value;
    const date = document.querySelector('input[type="date"]').value;
    const time = document.querySelector('input[type="time"]').value;
    const guests = document.querySelector('select').value;
    const requests = document.querySelector('textarea').value;

    if (!name || !phone || !date || !time || !guests) {
        alert('Please fill in all required fields before reserving.');
        return;
    }

    const message =
        `Hello NRI GBOO! I'd like to make a reservation 🍲

👤 Name: ${name}
📞 Phone: ${phone}
📅 Date: ${date}
🕐 Time: ${time}
👥 Guests: ${guests}
📝 Special Requests: ${requests || 'None'}

Thank you!`;

    const url = `https://wa.me/2347042697803?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}