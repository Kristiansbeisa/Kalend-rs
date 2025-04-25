const kal = document.getElementById("calendar");
const mGads = document.getElementById("monthYear");
let datums = new Date();
let men = datums.getMonth();
let gads = datums.getFullYear();
const svetkupanelis = document.getElementById("svetki");

const dienas = ["Pirmdiena", "Otrdiena", "Trešdiena", "Ceturtdiena", "Piektdiena", "Sestdiena", "Svētdiena"];
const svetki = {
  "1-1": "Jaunais Gads",
  "2-14": "Valentīndiena",
  "3-8": "Sieviešu diena",
  "5-4": "Neatkarības atjaunošana, ASdasdasd, ASD ASD ASD ,sa dAS d",
  "6-23": "Līgo",
  "6-24": "Jāņi",
  "11-18": "Proklamēšanas diena",
  "12-24": "Z-svētku vakars",
  "12-25": "1. Z-svētki",
  "12-26": "2. Z-svētki",
  "12-31": "Vecgada vakars"
};

function kalendar(m, g) {
  kal.innerHTML = "";
  svetkupanelis.innerHTML = "<h2>Svētki</h2><p>Izvēlieties dienu, lai redzētu svētkus</p>";
  const pirmdiena = new Date(g, m).getDay();
  const dienasSk = new Date(g, m + 1, 0).getDate();
  const nobīde = (pirmdiena + 6) % 7;
  mGads.textContent = mennosaukums(m) + " " + g;

  dienas.forEach(d => kal.innerHTML += `<div class="weekday"><strong>${d}</strong></div>`);
  for (let i = 0; i < nobīde; i++) kal.innerHTML += `<div class="day0"></div>`;

  for (let d = 1; d <= dienasSk; d++) {
    const datumsKey = `${m + 1}-${d}`;
    const sv = svetki[datumsKey] ? `<div class="holiday">${svetki[datumsKey]}</div>` : "";
    const diena = document.createElement("div");
        diena.classList.add("day");
        diena.innerHTML = `<span>${d}</span>${sv}`;
        diena.onclick = () => svetkip(datumsKey, d, mennosaukums(m));
        kal.appendChild(diena);
      }
    }

    function svetkip(datumsKey, d, m) {
      if (svetki[datumsKey]) {
        svetkupanelis.innerHTML = `<h2>Svētki ${d + " " + m}</h2><p>${svetki[datumsKey]}</p>`;
      } else {
        svetkupanelis.innerHTML = `<h2>Svētki ${d + " " + m}</h2><p>Šajā dienā nav svētku</p>`;
      }
    }

function mennosaukums(m) {
  return ["Janvāris", "Februāris", "Marts", "Aprīlis", "Maijs", "Jūnijs", "Jūlijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"][m];
}

function ieprmen() {
  if (--men < 0) { men = 11; gads--; }
  kalendar(men, gads);
}

function nakmen() {
  if (++men > 11) { men = 0; gads++; }
  kalendar(men, gads);
}

kalendar(men, gads);