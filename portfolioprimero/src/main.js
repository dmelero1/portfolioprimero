console.log('Vite está funcionando correctamente');

const images = ["./src/assets/imagenWebDiseños.jpg", "./src/assets/paginaCoches.jpg", "./src/assets/paginaCiudades.jpg"];
let currentIndex = 0;

const mainImage = document.getElementById("main-image");
const nextButton = document.getElementById("next-button");

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  mainImage.src = images[currentIndex];
  mainImage.style.transform = "scale(1.1)";
  setTimeout(() => (mainImage.style.transform = "scale(1)"), 300);
});