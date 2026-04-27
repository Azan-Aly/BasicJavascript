const messages = [
    "Initializing Hacking...",
    "Reading your files...",
    "Password files detected...",
    "Sending all passwords and personal files to server...",
    "Cleaning up..."
];

const typewriterEffect = async (text, container, playSound = false) => {
    for (let i = 0; i < text.length; i++) {
        container.textContent += text[i];
        if (playSound && text[i] !== ' ') {
            document.getElementById('typeSound').currentTime = 0;
            document.getElementById('typeSound').play();
        }
        await new Promise(res => setTimeout(res, 50)); // typing speed
    }
    container.textContent += '\n';
};

const randomDelay = () => {
    const time = Math.floor(Math.random() * 1000) + 500;
    return new Promise(res => setTimeout(res, time));
};

(async () => {
    const terminal = document.getElementById('terminal');
    for (const msg of messages) {
        await randomDelay();
        await typewriterEffect(msg, terminal, true); // Set to false if you don't want sound
    }
})();
