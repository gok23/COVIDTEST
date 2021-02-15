class UI {
  constructor() {
    this.country = document.getElementById('country-location');
    this.time = document.getElementById('last_update');
    this.cases = document.getElementById('cases');
    this.deaths = document.getElementById('deaths');
    this.recovered = document.getElementById('recovered');
  }

  paint(covid) {
    this.country.textContent = `country:${covid.country}`;
    this.time.textContent = `Last update: ${covid.last_update}`;
    this.cases.textContent = `Total cases: ${covid.cases}`;
    this.deaths.textContent = `Total deaths: ${covid.deaths}`;
    this.recovered.textContent = `Recovered: ${covid.recovered}`;
    }
}
