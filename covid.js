class Covid {
  constructor(country) {
    this.country = country;
  }

  // Fetch weather from API
  async getcoviddetails() {
    
    const response = await fetch(`https://covid19-api.org/api/status/${this.country}`);
    
    const responseData = await response.json();

    return responseData
  }

  // Change weather location
  changeLocation(country) {
    this.country = country;
  }
}