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
      loadOffers();
      break;
    case "/locations":
      loadLocationsPage();
      break;
    default:
      break;
  }
}

// Helper function to format numbers in italian format
function formatNumber(number, digits = 0) {
  return number.toLocaleString("it-IT", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}

// getElementById but wait until the DOM is ready
async function getElementById(id) {
  return new Promise((resolve, reject) => {
    function checkReady() {
      if (document.readyState !== "loading") {
        let element = document.getElementById(id);
        if (element) {
          resolve(element);
        } else {
          reject(new Error(`Element with id "${id}" not found.`));
        }
      } else {
        setTimeout(checkReady, 100);
      }
    }
    checkReady();
  });
}

// Helper function to get the offers
async function getOffers({ offerId, page = 1, perPage = 20 }) {
  // Return the offers from the API
  console.debug("Fetching offers...");
  const params = `?page=${page}&per_page=${perPage}/${offerId || ""}`;
  return fetch(`https://api.genoleggia.com/offers/public${params}`)
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
  getOffers({ perPage: 6 }).then(async (data) => {
    // Get the offers container element
    const target2 = await getElementById("offers");
    target2.innerHTML = "";
    // Add the offers
    for (let i = 0; i < data.length; i++) {
      target2.innerHTML += CarOffer(data[i]);
    }
  });
}

// Car offer string template for the other offers section
function CarOffer(props) {
  return `
  <div class="car-offer">
    <div class="car-offer-image">
      <img src=${props.vehicle.model.image} alt="" class="image-3">
    </div>
    <h3 class="car-offer-price smaller red">${props.brand.name} ${
    props.model.name
  }</h3>
    <div class="car-price-details black">
      ${props.duration} mesi · ${formatNumber(props.distance)} km/anno
      <br/>
      Anticipo €${formatNumber(props.deposit)} + IVA
    </div>
    <div class="car-offer-btn">
      <a href="/offers?offerId=${props.id}" class="button red w-button">
        Scopri di più
      </a>
    </div>
  </div>`;
}

// Function to load the offer on the offer details page
function loadOffers() {
  // Get the query string
  const queryString = window.location.search;
  // Get the query params
  const urlParams = new URLSearchParams(queryString);
  // If there is a "offerId" param, load the specific offer, otherwise load all offers
  if (urlParams.has("offerId")) {
    loadOfferDetails({ offerId: urlParams.get("offerId") });
  } else {
    loadAllOffers();
  }
}

function loadOfferDetails({ offerId }) {
  // Fetch offers
  getOffers({ offerId }).then(async (data) => {
    // Get the target element
    const target = await getElementById("offer-details");
    target.innerHTML = "";
    // Add the offer
    target.innerHTML += OfferDetails(data);
  });
}

// Offer details string template
function OfferDetails(props) {
  return `
  <div class="car-details-image-wrapper">
    <img src=${props.vehicle.model.image} alt="" class="car-details-image">
  </div>
  <div class="car-details-info">
    <h3 class="title red bigger">${props.brand.name} ${props.model.name}</h3>
    <div class="subtitle">
      ${props.duration} mesi · ${formatNumber(props.distance)} km/anno
      <br/>
      Anticipo €${formatNumber(props.deposit)} + IVA
    </div>
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
    "https://cdn.jsdelivr.net/gh/965311532/genoleggia.it@1054d4b7b0c7d5ce845002ff749c988740b9925f/assets/regions.json"
  ).then((res) => res.json());
}

// Function to load the locations
async function getLocations() {
  console.debug("Fetching locations...");
  return fetch(
    "https://cdn.jsdelivr.net/gh/965311532/genoleggia.it@4bd6c6bed1aa46a7ea02b6647bb0982a496e8707/assets/locations.json"
  ).then((res) => res.json());
}

// Function to fix the location form
async function fixLocationForm() {
  // Get the `locations` select element
  const locationsSelect = await getElementById("locations");
  getLocations().then((locations) => {
    // Add the regions to the select element (the keys are the region names)
    locationsSelect.innerHTML = "";
    const regions = Object.keys(locations).sort();
    regions.forEach((region) => {
      locationsSelect.innerHTML += `<option value="${region}">${region} (${locations[region].length})</option>`;
    });
  });
  // When the `location-form-btn` is clicked we want to intercept the event and redirect the user to the correct location page
  const locationBtn = await getElementById("location-form-btn");
  locationBtn.addEventListener("click", (event) => {
    // Prevent the default behaviour
    event.preventDefault();
    // Get the selected region
    const selectedRegion = locationsSelect.value;
    // Redirect the user to the correct location page
    window.location.href = `/locations?region=${selectedRegion}`;
  });
}

// Function to load the locations page
async function loadLocationsPage() {
  // Get the query string
  const queryString = window.location.search;
  console.debug("Query string: " + queryString);
  // Get the query params
  const urlParams = new URLSearchParams(queryString);
  // Get the region
  const region = urlParams.get("region");
  console.debug("Region: " + region);
  // Get the title, image and blocks container elements
  const title = await getElementById("location-title");
  const image = await getElementById("location-image");
  const blocks = await getElementById("location-blocks");
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
    <strong>${props.name}<br></strong>${props.address}<br>${props?.tel || ""}${
    props?.tel && props?.email ? " • " : ""
  }${props?.email || ""}
  </div>
  <a href="${
    props?.email ? `mailto:${props.email}` : `tel:${props.tel}`
  }" class="button-hero red w-button">Contatta subito</a>
  <div class="${last ? "hidden" : "location-divider"}"></div>  
</div>
`;
}
