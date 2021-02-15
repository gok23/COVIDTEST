// Init storage
const storage = new Storage();
// Get stored location data
const covidLocation = storage.getLocationData();
// Init weather object
const covid = new Covid(covidLocation.country);
// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getcoviddetails);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const country = document.getElementById('country').value;

  // Change location
  covid.changeLocation(country);

  // Set location in LS
  storage.setLocationData(country);

  // Get and display weather
  getcoviddetails();

  // Close modal
  $('#locModal').modal('hide');
});

function getcoviddetails(){
  covid.getcoviddetails()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}