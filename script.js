// Initialize Icons
lucide.createIcons();

// Custom Cursor Logic
const cursor = document.getElementById('custom-cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Project List
const projects = [
    {
        name: "Hyper-V Manager",
        role: "Lead Developer",
        desc: "Automated virtualization management suite."
    },
    {
        name: "Sentinel API",
        role: "Backend Architect",
        desc: "Encryption-first data transmission protocol."
    },
    {
        name: "Zeltux OS",
        role: "Core Contributor",
        desc: "Minimalist Linux distribution for power users."
    }
];

// Inject Projects
const grid = document.getElementById('projects');
projects.forEach(p => {
    grid.innerHTML += `
        <div class="card">
            <span style="color: var(--accent); font-size: 12px; font-weight: bold;">${p.role}</span>
            <h3 style="font-size: 2rem; margin: 15px 0;">${p.name}</h3>
            <p style="color: var(--text-dim); max-width: 300px;">${p.desc}</p>
        </div>
    `;
});

// Simple Scroll Reveal Effect
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < window.innerHeight - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});
