var images = ["image/imagem1.jpg", "image/Imagem2.jpg", "image/imagem3.jpg", "image/imagem4.jpg"];
var currentIndex = 0;
function changeImage() {
    if (currentIndex > 0) {
        document.getElementById("slider-image").style.border = "none";
    }
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("slider-image").style.border = "5px solid #333";
    document.getElementById("slider-image").src = images[currentIndex];
}
setInterval(changeImage, 3000);
