import { Serie } from "./serie.js";
import { series } from './data.js';


let seriesTbody: HTMLElement = document.getElementById('series')!;
let detalleCarta = document.getElementById("cartaOculta")!;
const getPromedioTemporadasElm: HTMLElement = document.getElementById("seasons-average")!;


renderSeriesInTable(series);
getPromedioTemporadasElm.innerHTML = `${getPromedioTemporadas(series)}`

function renderSeriesInTable(series: Serie[]): void {
  series.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td><strong>${c.num}</strong></td>
                           <td> <a href= ${c.link}>${c.name}</a> </td>
                           <td>${c.channel}</td>
                           <td>${c.seasons}</td>`;
    seriesTbody.appendChild(trElement);
    trElement.addEventListener("click", () => mostrarCartaSerie(c))
  });
}

function mostrarCartaSerie(c: Serie) {
  detalleCarta.innerHTML = `
      <div class="card" style="width: 18rem;">
          <img src="${c.img}" class="card-img-top" alt="${c.name}">
          <div class="card-body">
              <h5 class="card-title">${c.name}</h5>
              <p class="card-text">${c.desc}</p>
              <a href="${c.link}" target="_blank">${c.link}</a>
          </div>
      </div>
  `;
}

function getPromedioTemporadas(series: Serie[]): number {
    let sumaTemporadas : number = 0;
    let numeroSeries : number = series.length;
    series.forEach((serie) => sumaTemporadas = sumaTemporadas + serie.seasons);
    return sumaTemporadas/numeroSeries;

  }


