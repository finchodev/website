// 1. Initialize Lucide Icons
lucide.createIcons();

// 2. Custom Cursor Logic
const cursor = document.getElementById('custom-cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
});

// 3. Project Data & Injection
const projects = [
    { name: "Zeltux Core", role: "Framework", desc: "High-speed modular backend utility." },
    { name: "Sentinel", role: "Security", desc: "Private API encryption and tunneling." },
    { name: "Hyper-V", role: "Infrastructure", desc: "Cloud resource automation dashboard." }
];

const grid = document.getElementById('projects');
projects.forEach(p => {
    grid.innerHTML += `
        <div class="card">
            <span style="color: var(--accent); font-size: 11px; font-weight: bold; letter-spacing: 1px;">${p.role.toUpperCase()}</span>
            <h3>${p.name}</h3>
            <p>${p.desc}</p>
        </div>
    `;
});

// 4. Terminal Logic
const terminalInput = document.getElementById('terminal-input');
const terminalBody = document.getElementById('terminal-body');

const commands = {
    help: "Available: [about, projects, contact, clear, secret]",
    about: "Zeltux v2.5. Focus: Minimalist High-Performance Web Architecture.",
    projects: "Active: Zeltux Core, Sentinel API, Hyper-V Interface.",
    contact: "Inquiries: hello@zeltux.dev",
    secret: "SXVzdCBhIGxpdHRsZSB0ZXN0IGZvciB5b3UuLi4=" // Base64 for "Just a little test for you..."
};

terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const input = terminalInput.value.toLowerCase().trim();
        
        if (input === 'clear') {
            const outputs = document.querySelectorAll('.output');
            outputs.forEach(o => o.remove());
        } else if (input !== "") {
            const response = commands[input] || `Unknown command: ${input}`;
            createOutput(input, response);
        }

        terminalInput.value = '';
    }
});

function createOutput(input, response) {
    const line = document.createElement('div');
    line.className = 'output';
    line.innerHTML = `<span class="prompt">zeltux $></span> ${input}<br><span style="color:var(--text-dim)">${response}</span>`;
    
    const inputLine = document.querySelector('.input-line');
    terminalBody.insertBefore(line, inputLine);
    terminalBody.scrollTop = terminalBody.scrollHeight;
}

// 5. Discord Status (Mockup)
function updateStatus() {
    const statuses = ['Online', 'Idle', 'Do Not Disturb'];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    document.getElementById('discord-status').innerText = randomStatus;
}
updateStatus();
