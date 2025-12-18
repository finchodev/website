// Initialize Icons
lucide.createIcons();

// Project Data
const myProjects = [
    {
        title: "Zeltux Core",
        description: "An advanced systems utility built for speed.",
        tags: ["C++", "JavaScript"]
    },
    {
        title: "API Wrapper",
        description: "A seamless way to interact with cloud services.",
        tags: ["Node.js", "REST"]
    }
];

// Inject Projects into HTML
const container = document.getElementById('project-container');

myProjects.forEach(proj => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <h3>${proj.title}</h3>
        <p>${proj.description}</p>
        <div style="display:flex; gap:10px;">
            ${proj.tags.map(t => `<small style="color:var(--accent)">#${t}</small>`).join('')}
        </div>
    `;
    container.appendChild(card);
});
