const pianoRoll = document.getElementById('piano-roll');
const audio = document.getElementById('audio');

// Define piano keys and their corresponding frequencies
const keys = [
    { note: 'C4', frequency: 261.63 },
    { note: 'D4', frequency: 293.66 },
    { note: 'E4', frequency: 329.63 },
    { note: 'F4', frequency: 349.23 },
    { note: 'G4', frequency: 392.00 },
    { note: 'A4', frequency: 440.00 },
    { note: 'B4', frequency: 493.88 },
];

// Create piano keys
keys.forEach(key => {
    const keyElement = document.createElement('div');
    keyElement.classList.add('key');
    keyElement.setAttribute('data-frequency', key.frequency);
    keyElement.addEventListener('click', () => toggleNoteAtCurrentBeat(keyElement));
    pianoRoll.querySelector('.keys').appendChild(keyElement);
});

// Toggle note at the current beat
function toggleNoteAtCurrentBeat(keyElement) {
    const currentBeat = getCurrentBeat();
    const noteElement = document.createElement('div');
    noteElement.classList.add('note');
    noteElement.style.width = `${50}px`; // Adjust note width as needed
    keyElement.appendChild(noteElement);
    
    // Play the sound
    const frequency = parseFloat(keyElement.getAttribute('data-frequency'));
    playSound(frequency);
}

// Function to play sound
function playSound(frequency) {
    const context = new AudioContext();
    const oscillator = context.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.value = frequency;
    oscillator.connect(context.destination);
    oscillator.start();
    setTimeout(() => oscillator.stop(), 500); // Stop after 0.5 seconds
}

// Get the current beat (for demonstration purpose, returns 1)
function getCurrentBeat() {
    return 1;
}
