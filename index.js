// Script to load all relevant data and register event listeners for genoleggia.it

// If we need to access data in the current repo, we can use this
const BASE_URL = "https://965311532.github.io/genoleggia.it";

// When the DOM is loaded, initialize the router
document.addEventListener("DOMContentLoaded", function (event) {
  const currentPath = window.location.pathname;
  console.debug("Current path: " + currentPath);
  switch (currentPath) {
    case "/":
      console.debug("Loading home page");
      loadHomePageOffers();
  }
});

// Function to load the offers on the home page
function loadHomePageOffers() {
  const target = document.getElementById("hero-offers");
  console.debug("Target element: " + target);
  const imageUrl =
    "https://cdn-08.imagin.studio/getImage?&customer=itgenoleggia-spa&make=lancia&modelFamily=ypsilon&modelRange=ypsilon&modelVariant=ha&modelYear=2018&powerTrain=fossil&transmission=0&bodySize=5&trim=0&paintId=imagin-grey&angle=23";
  const element = `
  <div class="car-offer">
    <h3 class="car-offer-price">263,00€</h3>
    <div class="car-price-details">MESE I.E.</div>
    <div class="car-offer-image">
      <img src=${imageUrl} alt="" class="image-3">
    </div>
    <h3 car-name="" class="car-offer-price smaller">Lancia Ypsilon</h3>
    <div class="car-price-details">Anticipo €0 · 48 mesi · 10.000 km/anno</div>
    <div class="car-offer-btn">
      <a href="/lancia-ypsilon" class="button w-button">Richiedi informazioni</a>
    </div>
  </div>`;
  console.debug("Element: " + element);
  target.innerHTML = element;
}
