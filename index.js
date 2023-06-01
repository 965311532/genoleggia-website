// Script to load all relevant data and register event listeners for genoleggia.it

// If we need to access data in the current repo, we can use this
const BASE_URL = "https://965311532.github.io/genoleggia.it";

// Start the script
start();

// Don't wait for the DOM to be ready, start loading data immediately
function start() {
  const currentPath = window.location.pathname;
  console.debug("Current path: " + currentPath);
  switch (currentPath) {
    case "/":
      loadHomePageOffers();
      fixLocationForm();
      break;
    case "/offers":
      loadOffersDetails();
      break;
    case "locations":
      loadLocations();
      break;
    default:
      break;
  }
}

// getElementById but wait until the DOM is ready
function getElementById(id) {
  while (true) {
    if (document.readyState !== "loading") {
      return document.getElementById(id);
    }
    sleep(25); // Pause for a small amount of time
  }
}

// Function to sleep for a given amount of time
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Helper function to get the offers
async function getOffers() {
  // Return the offers store in the assets folder
  console.debug("Fetching offers...");
  return fetch(
    "https://cdn.jsdelivr.net/gh/965311532/genoleggia.it@4e65a064a4b46471bf81396174245875e0b26508/assets/offers.json"
  )
    .then((res) => res.json())
    .then((data) => {
      console.debug("Offers fetched: " + data);
      return data;
    })
    .catch((err) => {
      console.error("Error fetching offers: " + err);
    });
}

// Function to load the offers on the home page
function loadHomePageOffers() {
  // Fetch offers
  getOffers().then((data) => {
    // Get the hero container element
    const target = getElementById("hero-offers");
    target.innerHTML = "";
    // Add the offers (first 3)
    for (let i = 0; i < 3; i++) {
      target.innerHTML += HeroCarOffer(data[i]);
    }
    // Get the other offers container element
    const target2 = getElementById("offers");
    target2.innerHTML = "";
    // Add the offers (last 6)
    for (let i = 3; i < 9; i++) {
      target2.innerHTML += CarOffer(data[i]);
    }
  });
}

// Car offer string template for the hero section
function HeroCarOffer(props) {
  return `
  <div class="car-offer">
    <h3 class="car-offer-price">€${parseInt(props.price).toFixed(0)},00€</h3>
    <div class="car-price-details">MESE I.E.</div>
    <div class="car-offer-image">
      <img src=${props.image} alt="" class="image-3">
    </div>
    <h3 class="car-offer-price smaller">${props.name}</h3>
    <div class="car-price-details">${props.details}</div>
    <div class="car-offer-btn">
      <a href="#contact-us-form" class="button w-button">Richiedi informazioni</a>
    </div>
  </div>`;
}

// Car offer string template for the other offers section
function CarOffer(props) {
  return `
  <div class="car-offer">
    <div class="car-offer-image">
      <img src=${props.image} alt="" class="image-3">
    </div>
    <h3 class="car-offer-price smaller red">${props.name}</h3>
    <div class="car-price-details black">${props.details}</div>
    <div class="car-offer-btn">
      <a href="/offers?car=${props.slug}" class="button red w-button">Scopri di più</a>
    </div>
  </div>`;
}

// Function to load the offer on the offer details page
function loadOffersDetails() {
  // Fetch offers
  getOffers().then((data) => {
    // Get the query string
    const queryString = window.location.search;
    console.debug("Query string: " + queryString);
    // Get the query params
    const urlParams = new URLSearchParams(queryString);
    // Get the car slug
    const carSlug = urlParams.get("car");
    console.debug("Car slug: " + carSlug);
    // Get the car
    const car = data.find((car) => car.slug === carSlug);
    console.debug("Car: " + car);
    // Get the target element
    const target = getElementById("offer-details");
    target.innerHTML = "";
    // Add the offer
    target.innerHTML += OfferDetails(car);
  });
}

// Offer details string template
function OfferDetails(props) {
  return `
  <div class="car-details-image-wrapper">
    <img src=${props.image} alt="" class="car-details-image">
  </div>
  <div class="car-details-info">
    <h3 class="title red bigger">${props.name}</h3>
    <div class="subtitle">${props.details}</div>
    <h1 class="title red bold">${parseFloat(props.price).toFixed(0)},00€ 
      <span class="text-span">mese i.e.</span>
    </h1>
    <div class="car-details-button">
      <a href="#contact-us-form" class="button-hero red w-button">Richiedi preventivo</a>
    </div>
  </div>`;
}

// Function to load the regions
async function getRegions() {
  console.debug("Fetching regions...");
  return fetch(
    "https://cdn.jsdelivr.net/gh/965311532/genoleggia.it@4bd6c6bed1aa46a7ea02b6647bb0982a496e8707/assets/regions.json"
  ).then((res) => res.json());
}

// Function to fix the location form
function fixLocationForm() {
  // Get the `locations` select element
  const locationsSelect = getElementById("locations");
  getRegions().then((regions) => {
    // Add the regions to the select element
    locationsSelect.innerHTML = "";
    regions.forEach((region) => {
      locationsSelect.innerHTML += `<option value="${region.name}">${region.name}</option>`;
    });
  });
  // When the `location-form` is submitted we want to intercept the event and redirect the user to the correct location page
  const locationForm = getElementById("location-form");
  locationForm.addEventListener("submit", (event) => {
    // Prevent the default form submission
    event.preventDefault();
    // Get the selected region
    const selectedRegion = locationsSelect.value;
    // Redirect the user to the correct location page
    window.location.href = `/locations?region=${selectedRegion}`;
  });
}

// Function to load the locations
async function getLocations() {
  console.debug("Fetching locations...");
  return fetch(
    "https://cdn.jsdelivr.net/gh/965311532/genoleggia.it@4bd6c6bed1aa46a7ea02b6647bb0982a496e8707/assets/locations.json"
  ).then((res) => res.json());
}

// Function to load the locations page
function loadLocationsPage() {
  // Get the query string
  const queryString = window.location.search;
  console.debug("Query string: " + queryString);
  // Get the query params
  const urlParams = new URLSearchParams(queryString);
  // Get the region
  const region = urlParams.get("region");
  console.debug("Region: " + region);
  // Get the title, image and blocks container elements
  const title = getElementById("location-title");
  const image = getElementById("location-image");
  const blocks = getElementById("location-blocks");
  // Set the title
  title.innerHTML = region;
  // Set the image
  getRegions().then((regions) => {
    const regionObj = regions.find((r) => r.name === region);
    image.src = regionObj.image;
  });
  // Set the location blocks
  getLocations().then((locations) => {
    blocks.innerHTML = "";
    const regionLocations = locations[region];
    regionLocations.forEach((location, index) => {
      blocks.innerHTML += LocationBlock(
        location,
        index === regionLocations.length - 1
      );
    });
  });
}

// Location block string template
function LocationBlock(props, last) {
  return `
<div class="location-block">
  <div class="location-info">
    <strong>${props.name}<br></strong>${props.address}<br>${props?.tel}${
    props?.tel && props?.email ? " • " : ""
  }${props?.email}
  </div>
  <a href="${
    props?.email ? `mailto:${props.email}` : `tel:${props.tel}`
  }" class="button-hero red w-button">Contatta subito</a>
  <div class="${last ? "hidden" : "location-divider"}"></div>  
</div>
`;
}
