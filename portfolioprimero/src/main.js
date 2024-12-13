console.log("Vite está funcionando correctamente");

const images = [
{
  src: "./src/assets/img/imagenWebDiseños.jpg",
  title: "Web Diseño:",
  description: "He creado una pagina que simula una pagina de diseño de camisetas, el ejemplo es un diseño de equipaciones para un equipo de futbol. Incluye un banner con un descuento, unas cajas con las 3 caracteristicas más importantes para el cliente. En la página 2 se explica más y mejor la composición y caracteristicas de nuestras camisetas.",
  link: "https://dmelero1.github.io/maquetacionSassVite/"
},
{
  src: "./src/assets/img/paginaCoches.jpg",
  title: "Concesionario:",
  description: "He creado una pagina que simula un concesionario de coches que incluye un filtrado por marcas o caracteristicas del coche como los kilometros, el año, el precio, etc...Incluye la opcion de valorar con un like cada coche. Para esto hay que conectarse en un base de datos ya creada y relacionar toda la información.",
  link: "https://github.com/dmelero1/concesionario"
},
{
  src: "./src/assets/img/paginaCiudades.jpg",
  title: "Ciudades Patrimonio:",
  description: "He creado una pagina donde aparecen muchas ciudades de España con la opcion de filtrar su busqueda por las rutas de estas ciudades. Incluye la opcion de valorar del 1 al 5 estrellas cada ruta. A la hora de valorar, nuestra valoración actualizará la media de estrellas que los visitantes de la web han decidido.",
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

  mainImage.style.transform = "scale(1.1)";
  setTimeout(() => (mainImage.style.transform = "scale(1)"), 300);
}

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateContent();
});

previousButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1) % images.length;
  updateContent();
});

updateContent();
