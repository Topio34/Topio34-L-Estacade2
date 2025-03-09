document.addEventListener("DOMContentLoaded", () => {
    console.log("Le fichier JS est bien chargé !");
    
    // Animation d'apparition progressive pour les sections
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.3 });
    
    sections.forEach(section => {
        observer.observe(section);
    });
});

// Animation d'apparition progressive
const style = document.createElement("style");
style.textContent = `
    section {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    section.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);
