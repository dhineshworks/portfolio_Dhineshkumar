const terminal = document.getElementById('terminal');
let currentInput = '';

// Portfolio data
const portfolioData = {
    about: `My name is DHINESH KUMAR R. I'm a full-stack developer passionate about creating web design and learning new technologies. With expertise in JavaScript, React, and Node.js, I enjoy turning ideas into reality.

Education: Bachelor's electronics and communication engineering
In IFET college of engineering`,

    skills: `TECHNICAL SKILLS:
    
    Frontend:
    - HTML5, CSS3, JavaScript (ES6+)
    - React, Vue.js
    - Responsive Design, UI/UX
    
    Backend:
    - Node.js, Express.js
    - Python, Django
    - RESTful APIs
    
    Databases:
    - MongoDB, PostgreSQL, MySQL
    - Firebase
    
    Designing SKills:
    - Figma, Photoshop ,Aftereffects
    - blender,affinity designer

    Tools & Others:
    - Git/GitHub
    - Docker, Linux
    - VS Code`,

    projects: `loading... Please wait...

    1. Portfolio Website
    Description: A personal portfolio website to showcase my projects and skills.
    Tech Stack: HTML, CSS, JavaScript, React`,

    project: `loading... Please wait...

    1. Portfolio Website
    Description: A personal portfolio website to showcase my projects and skills.
    Tech Stack: HTML, CSS, JavaScript, React`,

    contact: `EMAIL: dhineshtn0@gmail.com
    PHONE: +91  9677520040
    LOCATION: Bangalore, India
    
    CONNECT WITH ME:
    GitHub: github.com/dineshworks
    LinkedIn: www.linkedin.com/in/dhineshkumar-r-43baa8253
    instagram: dhinesh.psd
    
    Feel free to reach out for opportunities, collaborations, or just to say hello!`
};

// Command handler
function handleCommand(input) {
    const command = input.trim().toUpperCase();
    
    let response = '';
    
    switch(command) {
        case 'ABOUT':
            response = portfolioData.about;
            break;
        case 'SKILLS':
            response = portfolioData.skills;
            break;
        case 'PROJECTS':
            response = portfolioData.projects;
            break;
        case 'PROJECT':
            response = portfolioData.project;
            break;
        case 'CONTACT':
            response = portfolioData.contact;
            break;
        case 'CLEAR':
            terminal.innerHTML = '';
            currentInput = '';
            addInputLine();
            return;
        case 'HI':
            response = `Hello! Welcome to my portfolio terminal. Type 'help' to see available commands.`;
            break;
        case 'HELP':
            response = `Welcome to My Portfolio Terminal\nType one of the following commands:\n\n${
                Object.keys(portfolioData).map(cmd => 
                    `${cmd.toUpperCase().padEnd(12)} - Show ${cmd} information`
                ).join('\n')
            }\n\nCLEAR      - Clear the screen\nHELP - Show this help menu`;
            break;
        case '':
            addInputLine();
            return;
        default:
            response = `'${input}' is not recognized as an internal or external command,\noperable program or batch file.`;
    }
    
    // Add command line
    const cmdLine = document.createElement('div');
    cmdLine.className = 'cmd-line';
    cmdLine.innerHTML = `<span class="prompt">C:\\Users\\Developer\\Portfolio></span><span class="command">${input}</span>`;
    terminal.appendChild(cmdLine);
    
    // Add response
    if (response) {
        const output = document.createElement('div');
        output.className = 'output';
        output.textContent = response;
        terminal.appendChild(output);
    }
    
    // Add new input line
    addInputLine();
    
    // Scroll to bottom
    terminal.scrollTop = terminal.scrollHeight;
    
    currentInput = '';
}

// Add input line for user
function addInputLine() {
    const inputLine = document.createElement('div');
    inputLine.className = 'cmd-line input-line';
    inputLine.id = 'current-input';
    inputLine.innerHTML = `<span class="prompt">C:\\Users\\Developer\\Portfolio></span><input type="text" autofocus>`;
    terminal.appendChild(inputLine);
    
    const input = inputLine.querySelector('input');
    input.focus();
    
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleCommand(input.value);
        }
    });
    
    input.addEventListener('input', (e) => {
        currentInput = e.target.value;
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    addInputLine();
});
