const holidays = {
    "1-1": "Jaunais Gads",
    "1-6": "Zvaigznes diena",
    "2-14": "Valentīndiena",
    "3-8": "Sieviešu diena",
    "5-1": "Darba svētki / Latvijas Republikas Satversmes sapulces sasaukšanas diena",
    "5-4": "Latvijas Neatkarības atjaunošanas diena",
    "6-23": "Līgo diena",
    "6-24": "Jāņi",
    "11-18": "Latvijas Republikas Proklamēšanas diena",
    "12-24": "Ziemassvētku vakars",
    "12-25": "Pirmie Ziemassvētki",
    "12-26": "Otrie Ziemassvētki",
    "12-31": "Vecgada vakars"
  };

  const calendar = document.getElementById("calendar");
  const monthYear = document.getElementById("monthYear");
  let today = new Date();
  let currentMonth = today.getMonth();
  let currentYear = today.getFullYear();

  const daysOfWeek = ["Pirmdiena", "Otrdiena", "Trešdiena", "Ceturtdiena", "Piektdiena", "Sestdiena", "Svētdiena"];

  function renderCalendar(month, year) {
    calendar.innerHTML = "";

    const firstDay = new Date(year, month).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const offset = (firstDay + 6) % 7;

    monthYear.textContent = `${getMonthName(month)} ${year}`;

    daysOfWeek.forEach(day => {
      const header = document.createElement("div");
      header.className = "weekday";
      header.innerHTML = `<strong>${day}</strong>`;
      calendar.appendChild(header);
    });

    for (let i = 0; i < offset; i++) {
      const empty = document.createElement("div");
      empty.className = "day";
      calendar.appendChild(empty);
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const dayDiv = document.createElement("div");
      dayDiv.className = "daybl";
      const dateKey = `${month + 1}-${d}`;
      let content = ``;
      if (holidays[dateKey]) {
        content = `<div class="holiday">${holidays[dateKey]}</div>`;
      }
      const dayDiv1 = document.createElement("div");
      dayDiv1.className = "day";
      dayDiv1.innerHTML = d;
      calendar.appendChild(dayDiv1);
      dayDiv.innerHTML = content;
      dayDiv1.appendChild(dayDiv);
    }
  }

  function getMonthName(month) {
    const months = ["Janvāris", "Februāris", "Marts", "Aprīlis", "Maijs", "Jūnijs", "Jūlijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"];
    return months[month];
  }

  function prevMonth() {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    renderCalendar(currentMonth, currentYear);
  }

  function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    renderCalendar(currentMonth, currentYear);
  }

  renderCalendar(currentMonth, currentYear);