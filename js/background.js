const images = [
    "0.png",
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png"
];

const chosenImages = images[Math.floor(Math.random() * images.length)];

const bgImages = document.createElement("img");

bgImages.src = `img/${chosenImages}`;

document.body.appendChild(bgImages);