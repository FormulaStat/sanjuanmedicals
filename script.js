/* ======================================================
   San Juan Jadsac Medicals – Main JavaScript File
   Handles navigation, smooth scrolling, UI interactions,
   and prepares structure for future dynamic features.
====================================================== */


/* ---------- MOBILE MENU (for future use) ---------- */
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('nav');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}



/* ---------- SMOOTH SCROLLING FOR INTERNAL LINKS ---------- */
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});



/* ---------- TESTIMONIAL SLIDER (Auto + Manual) ---------- */
let testimonialIndex = 0;

function rotateTestimonials() {
    const testimonials = document.querySelectorAll(".testimonial");

    testimonials.forEach((t, i) => {
        t.style.display = (i === testimonialIndex) ? "block" : "none";
    });

    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
}

if (document.querySelector(".testimonial")) {
    rotateTestimonials();            // Show first
    setInterval(rotateTestimonials, 5000);   // Auto rotate every 5s
}



/* ---------- APPOINTMENT FORM VALIDATION (future page) ---------- */
function validateAppointmentForm() {
    const form = document.getElementById("appointmentForm");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        const name = form.querySelector("#patientName").value.trim();
        const contact = form.querySelector("#patientContact").value.trim();
        const doctor = form.querySelector("#doctorSelect").value;
        const date = form.querySelector("#appointmentDate").value;

        if (!name || !contact || !doctor || !date) {
            alert("Please fill in all required fields.");
            e.preventDefault();
        }
    });
}

validateAppointmentForm();



/* ---------- FUTURE FEATURES WE WILL ADD ---------- */
// - Invoice portal interactions
// - Fetch doctor list dynamically
// - Appointment email sender
// - Database integration
// - Real-time chat (optional)
// - Dark mode toggle
