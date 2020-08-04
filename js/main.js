(() => {
  console.log("JS file is linked");

  let burgerButton = document.querySelector("#burgerButton"),
      burgerButtonExit = document.querySelector("#burgerButtonExit"),
      returnTop = document.querySelector("#returnTop"),
      dividers = document.querySelectorAll(".divider"),
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

  burgerButton.addEventListener("click", toggleNav);
  burgerButtonExit.addEventListener("click", toggleNav);

  returnTop.addEventListener("click", beamMeUpScotty);

  dividers.forEach(divider => divider.addEventListener("click", scrollDown));
})();
