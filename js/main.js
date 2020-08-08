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
      cartButton = document.querySelector(".shoppingCart"),
      cartContainer = document.querySelector(".cartContainer"),
      addToCart = document.querySelectorAll(".addToCart"),
      checkoutButton = document.querySelector(".checkoutButton"),
      downArrows = document.querySelectorAll(".downArrow"),
      upArrows = document.querySelectorAll(".upArrow"),
      mainNav = document.querySelector("#mainNav");

  function toggleNav() {
    mainNav.classList.toggle("hidden");
    burgerButtonExit.classList.toggle("hidden");
  }

  function beamMeUpScotty() {
    window.scroll({ top: 0, behavior: 'smooth' });

  }

  function scrollDown() {
    window.scrollBy({ top: 900, behavior: 'smooth' });
  }

  function flipImage() {
    console.log("flipping item...")
    //let galleryItem1 = document.querySelectorAll(".galleryItem1");
    // debugger;
    this.classList.remove("galleryItemAnimate");

    // animResetImg.classList.remove("galleryItemAnimate");
    let matches = document.querySelectorAll(`div[data-key="${this.dataset.key}"]`);
    matches.forEach(match => match.classList.toggle("hidden"));


    //galleryItem1.classList.toggle("hidden");
  }

  function toggleShoppingCart() {
    cartItem = document.querySelectorAll(".cartItem");
    cartItem.forEach(item => item.addEventListener("click", cartItemFunction));
    console.log(cartItem);
    cartContainer.classList.toggle("hidden");
    cartContainer.classList.toggle("flex");
  }

  function animateImage() {
    console.log("animating...");
    // debugger;
    this.classList.add("galleryItemAnimate");

  }


  function addItemToCart() {
    //debugger;
    this.classList.remove("galleryItemAnimate");
    // let shopMatches = document.querySelectorAll(`div[data-key="${this.dataset.key}"]`);
    // shopMatches.forEach(shopMatch => shopMatch.classList.toggle("hidden"));

    let addItem = document.querySelector(`img[data-key="${this.dataset.key}"]`);

    let newCartItem = document.createElement("li");
    newCartItem.dataset.key = `cart${this.dataset.key}`;
    newCartItem.className = "cartItem";
    newCartItem.appendChild(addItem);

    cartContainer.appendChild(newCartItem);

    cartItem = document.querySelectorAll(".cartItem");

  }

  function checkout() {
    location.reload();
  }



  function cartItemFunction() {
    //console.log(`${this.dataset.key}`)
    let  cartEdit = document.querySelector(`li[data-key="${this.dataset.key}"]`);
    console.log(cartEdit);
    cartEdit.classList.add("cartItemEdit");
    cartEdit.innerHTML = `<h1 class='cartItemRemove'>Remove?</h1> <span data-key='${this.dataset.key}' class='yes'>Yes</span> <span data-key='${this.dataset.key}' class='no'>No</span>`;
    let removeYes = document.querySelector(".yes"),
        removeNo = document.querySelector(".no");
    removeYes.addEventListener("click", removeCartItem);
    removeNo.addEventListener("click", keepCartItem);

  }

  function removeCartItem() {
    console.log("Removing item...");
    let cartEdit = cartContainer.querySelector(`li[data-key="${this.dataset.key}"]`);
    cartEdit.remove();
  }

  function keepCartItem() {
    console.log("Keeping item...");

  }

  function galleryUp() {
    if (window.innerWidth < 1200) {
      window.scrollBy({ top: -750, behavior: 'smooth' });
    }
    else {
      window.scrollBy({ top: -750, behavior: 'smooth' });
    }
  }

  function galleryDown() {
    console.log(window.innerWidth);
    if (window.innerWidth < 1200) {
      window.scrollBy({ top: 400, behavior: 'smooth' });
    }
    else {
      window.scrollBy({ top: 750, behavior: 'smooth' });
    }
  }

  addToCart.forEach(addButton => addButton.addEventListener("click", addItemToCart));

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

  upArrows.forEach(upArrow => upArrow.addEventListener("click", galleryUp));
  downArrows.forEach(downArrow => downArrow.addEventListener("click", galleryDown));

  checkoutButton.addEventListener("click", checkout);
  cartButton.addEventListener("click", toggleShoppingCart);

})();
