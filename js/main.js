(() => {
  console.log("JS file is linked");

  let burgerButton = document.querySelector("#burgerButton"),
      burgerButtonExit = document.querySelector("#burgerButtonExit"),
      returnTop = document.querySelector("#returnTop"),
      dividers = document.querySelectorAll(".divider"),
      galleryImages = document.querySelectorAll(".galleryImage"),
      galleryDetails = document.querySelectorAll(".galleryDetails"),
      mainNav = document.querySelector("#mainNav");

  function toggleNav() {
    if (mainNav.classList.contains("hidden")) {
    mainNav.classList.remove("hidden");
    burgerButtonExit.classList.remove("hidden");
  }
    else {
      mainNav.classList.add("hidden");
      burgerButtonExit.classList.add("hidden");
    }
  }

  function beamMeUpScotty() {
    window.scroll({ top: 0, behavior: 'smooth' })

  }

  function scrollDown() {
    window.scrollBy({ top: 800, behavior: 'smooth' });
  }

  function animateImage() {
    this.classList.add("galleryItemAnimate");



  }

  function flipImage() {
    //let galleryItem1 = document.querySelectorAll(".galleryItem1");
    //debugger;
    let matches = document.querySelectorAll(`div[data-key="${this.dataset.key}"]`);

    matches.forEach(match => match.classList.toggle("hidden"));
    this.classList.remove("galleryItemAnimate")

    //galleryItem1.classList.toggle("hidden");
  }

  burgerButton.addEventListener("click", toggleNav);
  burgerButtonExit.addEventListener("click", toggleNav);

  returnTop.addEventListener("click", beamMeUpScotty);

  dividers.forEach(divider => divider.addEventListener("click", scrollDown));

  galleryImages.forEach(galleryImage => galleryImage.addEventListener("click", animateImage));
  galleryDetails.forEach(galleryDetail => galleryDetail.addEventListener("click", animateImage));

  galleryImages.forEach(galleryImage => galleryImage.addEventListener("animationend", flipImage));
  galleryDetails.forEach(galleryDetail => galleryDetail.addEventListener("animationend", flipImage));
})();
