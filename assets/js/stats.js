
import { getData, filterUpcoming, filterPast, porcentajeMasAltoAsistencia, porcentajeMasBajoAsistencia, mayorCapacidad, upcomingEventsStatistics, pastEventsStatistics } from "./module/funciones.js";

// Obtiene el elemento del HTML que contendrá las estadísticas de los eventos
const statsMain = document.getElementById("stats-main");

// Función asíncrona autoinvocada
(async () => {
  try {
    // Obtiene los datos de la API
    const response = await getData();

    // Filtra los eventos PASADOS Y FUTUROS
    const upcomingEvents = filterUpcoming(response.events, response.currentDate);
    const pastEvents = filterPast(response.events, response.currentDate);

    // Obtiene el evento con el porcentaje de asistencia más alto y más bajo y el evento con mayor capacidad
    const porsentajeAlto = porcentajeMasAltoAsistencia(pastEvents);
    const porsentajeBajo = porcentajeMasBajoAsistencia(pastEvents);
    const mayorCapacity = mayorCapacidad(response.events);

    // Se Obtiene las estadísticas PASADOS Y FUTUROS
    const upcomingStatistics = upcomingEventsStatistics(upcomingEvents);
    const pastStatistics = pastEventsStatistics(pastEvents);

    // Se Rellena la tabla de estadísticas de eventos con los datos obtenidos
    const eventStatisticsContainer = document.getElementById("statistics-event");
    eventStatisticsContainer.innerHTML = `
            <tr>
                <td>"${porsentajeAlto.name}" with ${((porsentajeAlto.assistance * 100) / porsentajeAlto.capacity).toFixed(2)}%</td>
                <td>"${porsentajeBajo.name}" with ${((porsentajeBajo.assistance * 100) / porsentajeBajo.capacity).toFixed(2)}%</td>
                <td>"${mayorCapacity.name}" with ${mayorCapacity.capacity} capacity</td>
            </tr>
        `;

    // Se Rellena la tabla de estadísticas FUTURAS con los datos obtenidos
    const upcomingStatisticsContainer = document.getElementById("up-statistics");
    const upcomingRows = upcomingStatistics[0].map((category, i) => `
            <tr>
                <td>${category}</td>
                <td>$${upcomingStatistics[1][i]}</td>
                <td>${upcomingStatistics[2][i].toFixed(2)}%</td>
            </tr>
        `).join("");
    upcomingStatisticsContainer.innerHTML = upcomingRows;

    // Rellena la tabla de estadísticas pasadas con los datos obtenidos
    const pastStatisticsContainer = document.getElementById("past-statistics");
    const pastRows = pastStatistics[0].map((category, i) => `
            <tr>
                <td>${category}</td>
                <td>$${pastStatistics[1][i]}</td>
                <td>${pastStatistics[2][i].toFixed(2)}%</td>
            </tr>
        `).join("");
    pastStatisticsContainer.innerHTML = pastRows;
  } catch (error) {
    // Si ocurre un error al obtener los datos de la API, se muestra un mensaje de error en la pantalla
    statsMain.innerHTML = `<p class="text-center">API ERROR</p>`;
  }
})();
