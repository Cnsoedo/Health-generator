function generateHealth(event) {
  event.preventDefault();
  new Typewriter("#health", {
    strings: "Drink lots of water to stay dehydrated",
    autoStart: true,
    delay: 1,
    curosr: "",
  });
}

let healthFormElement = document.querySelector("#health-generator-form");
healthFormElement.addEventListener("submit", generateHealth);
