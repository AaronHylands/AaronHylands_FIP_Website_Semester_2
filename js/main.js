(() => {
  console.log("JS file is linked");

  let burgerButton = document.querySelector("#burgerButton"),
      burgerButtonExit = document.querySelector("#burgerButtonExit"),
      returnTop = document.querySelector("#returnTop"),
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
    window.scrollTo(0, 0);

  }

  burgerButton.addEventListener("click", toggleNav);
  burgerButtonExit.addEventListener("click", toggleNav);

  returnTop.addEventListener("click", beamMeUpScotty);
})();
