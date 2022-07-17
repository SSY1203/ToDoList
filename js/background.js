const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg","6.jpg", "7.jpg"];
const bgImage = document.createElement("img");
const presentImage = images[Math.floor(Math.random()*images.length)];

bgImage.src = `img/${presentImage}`;

document.body.prepend(bgImage);