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
    case "/offers":
      loadOffersDetails();
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

async function getOffers() {
  // Return the offers store in the assets folder
  return fetch(
    "https://cdn.jsdelivr.net/gh/965311532/genoleggia.it@4e65a064a4b46471bf81396174245875e0b26508/assets/offers.json"
  ).then((res) => res.json());
}

// Function to load the offers on the home page
function loadHomePageOffers() {
  // Fetch offers
  getOffers().then((data) => {
    console.debug("Offers: " + data);
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
    console.debug("Offers: " + data);
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

function OfferDetails(props) {
  return `
    <img src=${props.image} alt="" class="car-details-image">
    <div class="car-details-info">
      <h3 class="title red bigger">${props.name}</h3>
      <div class="subtitle">${props.details}</div>
      <h1 class="title red bold">${parseFloat(props.price).toFixed(0)},00€</h1>
      <div class="car-details-button">
      <a href="#contact-us-form" class="button-hero red w-button">Richiedi preventivo</a>
    </div>
  </div>`;
}
