// Script to load all relevant data and register event listeners for genoleggia.it

// If we need to access data in the current repo, we can use this
const BASE_URL = "https://965311532.github.io/genoleggia.it";

// Don't wait for the DOM to be ready, start loading data immediately
function start() {
  const currentPath = window.location.pathname;
  console.debug("Current path: " + currentPath);
  switch (currentPath) {
    case "/":
      loadHomePageOffers();
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

// Function to load the offers on the home page
function loadHomePageOffers() {
  // Fetch offers
  fetch(
    "https://cdn.jsdelivr.net/gh/965311532/genoleggia.it@349b50f62d36edacea720cf7fbfdd52e7e8fb69f/assets/offers.json"
  ).then((res) =>
    res.json().then((data) => {
      console.debug("Offers: " + data);
      // Get the container element
      const target = getElementById("hero-offers");
      // Clear the container
      target.innerHTML = "";
      // Add the offers (first 3)
      for (let i = 0; i < 3; i++) {
        target.innerHTML += HeroCarOffer(data[i]);
      }
    })
  );
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
      <a href="#" class="button w-button">Richiedi informazioni</a>
    </div>
  </div>`;
}
