// Wait for the document to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Show a popup message as soon as the page loads
    //setTimeout(() => {
    //    alert('I Love You! 💖');
    //}, 1000); // Delays the popup for 1 second to make it less jarring

    // Create a heart element dynamically
    let heart = document.createElement('div');
    heart.innerHTML = '❤️'; // Use the heart emoji
    heart.style.fontSize = '50px';
    heart.style.position = 'fixed';
    heart.style.bottom = '10px';
    heart.style.right = '10px';
    heart.style.animation = 'heart-beat 1s infinite'; // Add the animation

    // Append the heart to the body
    document.body.appendChild(heart);

    // Add an event listener to make the heart pulse when clicked
    heart.addEventListener('click', () => {
        alert('You mean everything to me! 💖');
    });
});

// Animation for the heart "beat" effect
const style = document.createElement('style');
style.innerHTML = `
    @keyframes heart-beat {
        0% { transform: scale(1); }
        50% { transform: scale(1.2); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);