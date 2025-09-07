function displayHealth(response) {
  console.log("health generated");
  new Typewriter("#health", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateHealth(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "4577128dt8o04b4f4924aca3faecb69f";

  let context =
    "You are a health expert and love a healthy lifestyle.Your mission is to generate a 4 line health tips in basic HTML and seperate each line with a <br/>. Make sure to follow the user instructions. Do not include a title to the health tips. Sign the health tips with 'Shecodes AI' inside a <strong> element at the end of the health tips and NOT at the beginning";
  let prompt = `User instructions are: Generate tips about  ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating health tips");
  console.log(`prompt: ${prompt}`);
  console.log(`context: ${context}`);

  axios.get(apiUrl).then(displayHealth);
}

let healthFormElement = document.querySelector("#health-generator-form");
healthFormElement.addEventListener("submit", generateHealth);
