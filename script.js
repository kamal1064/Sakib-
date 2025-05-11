let currentSlide = 1;

function nextSlide() {
    let slides = document.querySelectorAll('.slide');
    slides[currentSlide - 1].style.display = "none";
    currentSlide++;
    if (currentSlide <= slides.length) {
        slides[currentSlide - 1].style.display = "block";
    }
}

function replay() {
    location.reload();
}

// Puzzle Interaction
const canvas = document.getElementById("puzzleCanvas");
const ctx = canvas.getContext("2d");

let pieces = []; 

function shufflePuzzle() {
    pieces.sort(() => Math.random() - 0.5);
    drawPuzzle();
}

function drawPuzzle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach((piece, index) => {
        ctx.drawImage(piece.image, piece.x, piece.y, piece.width, piece.height);
    });
}

// Initialize Puzzle (Replace with real image URL)
const image = new Image();
image.src = "your-image.jpg";
image.onload = function () {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let piece = {
                image: image,
                x: i * 50,
                y: j * 50,
                width: 50,
                height: 50
            };
            pieces.push(piece);
        }
    }
    shufflePuzzle();
};