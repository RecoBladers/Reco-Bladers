// Smooth Scrolling for Navigation Links document.querySelectorAll('a[href^="#"]').forEach(anchor => { anchor.addEventListener("click", function (e) { e.preventDefault(); document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" }); }); });

// Highlight Active Navigation Link const sections = document.querySelectorAll("section"); const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => { let current = ""; sections.forEach(section => { const sectionTop = section.offsetTop; if (scrollY >= sectionTop - 60) { current = section.getAttribute("id"); } });

navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
    }
});

});

// Back to Top Button const backToTopButton = document.createElement("button"); backToTopButton.textContent = "↑"; backToTopButton.classList.add("back-to-top"); document.body.appendChild(backToTopButton);

window.addEventListener("scroll", () => { if (window.scrollY > 500) { backToTopButton.classList.add("show"); } else { backToTopButton.classList.remove("show"); } });

backToTopButton.addEventListener("click", () => { window.scrollTo({ top: 0, behavior: "smooth" }); });

// Contact Form Validation const contactForm = document.querySelector("#contactForm"); if (contactForm) { contactForm.addEventListener("submit", function (e) { e.preventDefault(); const name = this.querySelector("#name").value.trim(); const email = this.querySelector("#email").value.trim(); const message = this.querySelector("#message").value.trim();

if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Message sent successfully!");
    this.reset();
});

}

// Button Animations document.querySelectorAll("button").forEach(button => { button.addEventListener("mouseover", () => { button.style.transform = "scale(1.05)"; button.style.transition = "transform 0.2s"; });

button.addEventListener("mouseout", () => {
    button.style.transform = "scale(1)";
});

button.addEventListener("click", () => {
    button.classList.add("button-clicked");
    setTimeout(() => {
        button.classList.remove("button-clicked");
    }, 200);
});

});

// Fade-In Animations for Sections const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("fade-in"); } }); }, { threshold: 0.1 });

document.querySelectorAll("section").forEach(section => { observer.observe(section); });

