console.log("Vite está funcionando correctamente");
import gsap from "gsap";
import '../src/styles/main.scss'; 

const images = [
  {
    src: "./src/assets/img/imagenWebDiseños.jpg",
    title: "Web Diseño:",
    description: "He creado una página que simula una página de diseño de camisetas, el ejemplo es un diseño de equipaciones para un equipo de fútbol. Incluye un banner con un descuento, unas cajas con las 3 características más importantes para el cliente. En la página 2 se explica más y mejor la composición y características de nuestras camisetas.",
    link: "https://dmelero1.github.io/maquetacionSassVite/"
  },
  {
    src: "./src/assets/img/paginaCoches.jpg",
    title: "Concesionario:",
    description: "He creado una página que simula un concesionario de coches que incluye un filtrado por marcas o características del coche como los kilómetros, el año, el precio, etc...Incluye la opción de valorar con un like cada coche. Para esto hay que conectarse a una base de datos ya creada y relacionar toda la información.",
    link: "https://github.com/dmelero1/concesionario"
  },
  {
    src: "./src/assets/img/paginaCiudades.jpg",
    title: "Ciudades Patrimonio:",
    description: "He creado una página donde aparecen muchas ciudades de España con la opción de filtrar su búsqueda por las rutas de estas ciudades. Incluye la opción de valorar del 1 al 5 estrellas cada ruta. A la hora de valorar, nuestra valoración actualizará la media de estrellas que los visitantes de la web han decidido.",
    link: "https://github.com/dmelero1/ciudadesPatrimonio"
  }
];
let currentIndex = 0;

const mainImage = document.getElementById("main-image");
const nextButton = document.getElementById("next-button");
const previousButton = document.getElementById("previous-button");
const imageTitle = document.getElementById("image-title");
const imageDescription = document.getElementById("image-description");
const dynamicLink = document.getElementById("dynamic-link");

function updateContent() {
  const currentData = images[currentIndex];
  mainImage.src = currentData.src;
  imageTitle.textContent = currentData.title;
  imageDescription.textContent = currentData.description;
  dynamicLink.href = currentData.link;

  gsap.fromTo(
    mainImage,
    { 
      opacity: 0, 
      rotationY: 180, 
      scale: 0.6, 
      y: -50 
    }, 
    { 
      opacity: 1, 
      rotationY: 0, 
      scale: 1, 
      y: 0, 
      duration: 2.0, 
      ease: "elastic.out(1, 0.75)" 
    }
  );
}

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length; 
  updateContent();
});

previousButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length; 
  updateContent();
});

updateContent();
