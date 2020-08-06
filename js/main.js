(() => {
  console.log("JS file is linked");

  let burgerButton = document.querySelector("#burgerButton"),
      burgerButtonExit = document.querySelector("#burgerButtonExit"),
      returnTop = document.querySelector("#returnTop"),
      dividers = document.querySelectorAll(".divider"),
      galleryImages = document.querySelectorAll(".galleryImage"),
      galleryDetails = document.querySelectorAll(".galleryDetails"),
      storeItems = document.querySelectorAll(".storeItem"),
      storeDetails = document.querySelectorAll(".storeDetail"),
      cartButton = document.querySelector("#shoppingCart"),
      cartContainer = document.querySelector(".cartContainer"),
      addToCart = document.querySelectorAll(".addToCart"),
      mainNav = document.querySelector("#mainNav");

  function toggleNav() {
    mainNav.classList.toggle("hidden");
    burgerButtonExit.classList.toggle("hidden");
  }

  function beamMeUpScotty() {
    window.scroll({ top: 0, behavior: 'smooth' })

  }

  function scrollDown() {
    window.scrollBy({ top: 900, behavior: 'smooth' });
  }

  function animateImage() {
    this.classList.add("galleryItemAnimate");

  }

  function flipImage() {
    //let galleryItem1 = document.querySelectorAll(".galleryItem1");
    //debugger;
    this.classList.remove("galleryItemAnimate");
    let matches = document.querySelectorAll(`div[data-key="${this.dataset.key}"]`);

    matches.forEach(match => match.classList.toggle("hidden"));


    //galleryItem1.classList.toggle("hidden");
  }

  function toggleShoppingCart() {
    cartContainer.classList.toggle("hidden");
  }

  function addItemToCart() {
    debugger;
  }

  addToCart.forEach(addButton => addButton.addEventListener("click", addItemToCart));

  cartButton.addEventListener("click", toggleShoppingCart);

  burgerButton.addEventListener("click", toggleNav);
  burgerButtonExit.addEventListener("click", toggleNav);

  returnTop.addEventListener("click", beamMeUpScotty);

  dividers.forEach(divider => divider.addEventListener("click", scrollDown));

  galleryImages.forEach(galleryImage => galleryImage.addEventListener("click", animateImage));
  galleryDetails.forEach(galleryDetail => galleryDetail.addEventListener("click", animateImage));
  storeItems.forEach(storeItem => storeItem.addEventListener("click", animateImage));
  storeDetails.forEach(storeDetail => storeDetail.addEventListener("click", animateImage));

  galleryImages.forEach(galleryImage => galleryImage.addEventListener("animationend", flipImage));
  galleryDetails.forEach(galleryDetail => galleryDetail.addEventListener("animationend", flipImage));
  storeItems.forEach(storeItem => storeItem.addEventListener("animationend", flipImage));
  storeDetails.forEach(storeDetail => storeDetail.addEventListener("animationend", flipImage));
})();
