var img = document.getElementById("popcat1");
var audio = new Audio('pop.mp3');

// Mouse click event
img.addEventListener("mousedown", function(event) {
    img.src = 'popcat2.png';
    audio.play();
    showFlower(event.clientX, event.clientY);
});

img.addEventListener("mouseup", function() {
    img.src = 'popcat1.png';
});

// Touch event
img.addEventListener("touchstart", function(event) {
    event.preventDefault(); // Prevent default touch behavior
    img.src = 'popcat2.png';
    audio.play();
    showFlower(event.touches[0].clientX, event.touches[0].clientY);
});

// Function to show flower
function showFlower(x, y) {
    // Create flower element
    var flower = document.createElement("img");
    flower.src = 'flower.png'; // Path to your flower image
    flower.className = 'flower';
    flower.style.position = 'absolute';
    flower.style.left = x + 'px';
    flower.style.top = y + 'px';
    document.body.appendChild(flower);

    // Animate the flower
    animateFlower(flower);
}

// Function to animate flower
function animateFlower(flower) {
    // Randomize the floating direction and distance
    var deltaX = (Math.random() - 0.5) * 200; // Random horizontal movement
    var deltaY = -Math.random() * 100 - 50; // Random upward movement

    // Apply animation
    flower.animate([
        { transform: 'translate(0, 0)' },
        { transform: `translate(${deltaX}px, ${deltaY}px)` }
    ], {
        duration: 2000,
        easing: 'ease-in-out'
    });

    // Remove flower after animation
    setTimeout(function() {
        flower.remove();
    }, 2000);
}
