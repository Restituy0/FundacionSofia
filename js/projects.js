// URL de la API de Google Sheets
const sheetID = '182Mc52g86T-wurWKcDCTZ2ll-SWq25WUlBbuxVOQjjk';
const apiKey = 'AIzaSyDUEdZOUzqQ6NustHMfai-vdTnJK__uV28';
const sheetName = 'Proyectos';

// Ajustar el rango para abarcar más filas, por ejemplo hasta la fila 1000
const range = `${sheetName}!A1:D1000`;

const proxyUrl = 'https://api.allorigins.win/get?url=';
const url = `${proxyUrl}${encodeURIComponent(`https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/${range}?key=${apiKey}`)}`;

// Hacer la solicitud
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log("Respuesta completa:", data); // Ver qué devuelve el proxy
    const jsonData = JSON.parse(data.contents); // Convertir el contenido JSON
    console.log("Datos extraídos:", jsonData);
    
    if (!jsonData.values) {
      throw new Error('No se encontraron datos en la hoja de cálculo');
    }
    
    renderProjects(jsonData.values);
  })
  .catch(error => console.error('Error al obtener los datos:', error));
// fetch(url)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Error en la respuesta de la API');
//     }
//     return response.json();
//   })
//   .then(data => {
//     const projects = data.values;
//     if (!projects) {
//       throw new Error('No se encontraron datos en la hoja de cálculo');
//     }

//     // Elimina filas vacías que podrían estar después del último proyecto
//     const filteredProjects = projects.filter(row => row.some(cell => cell.trim() !== ''));

//     renderProjects(filteredProjects);
//   })
//   .catch(error => console.error('Error al obtener los datos:', error));

// Función para renderizar los proyectos
function renderProjects(projects) {
  const projectContainer = document.querySelector('.proyectos-list');
  const noProjectsMessage = document.getElementById('no-projects-message');

  if (!projectContainer) {
    console.error('No se encontró el contenedor de proyectos');
    return;
  }

  // Limpiar cualquier contenido previo
  projectContainer.innerHTML = '';

  if (projects.length <= 1) { // Si solo hay el encabezado o está vacío
    noProjectsMessage.style.display = 'block';
  } else {
    noProjectsMessage.style.display = 'none';

    projects.forEach((project, index) => {
      if (index === 0) return; // Ignorar la primera fila si es el encabezado

      const [title, description, date, imageUrl] = project;

      // Crear el HTML para cada proyecto
      const projectHTML = `
        <li class="proyecto-card">
          <img src="${imageUrl}" alt="${title}">
          <div class="proyecto-info">
            <h2>${title}</h2>
            <p>${description}</p>
            <p>${date}</p>
            <a href="../sections/donate.html" class="btn-donate">Apoyar Aqui</a>
          </div>
        </li>
      `;

      // Añadirlo al contenedor de proyectos
      projectContainer.innerHTML += projectHTML;
    });
  }
}
