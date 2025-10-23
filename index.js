function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "ae0t61305d43e04b2da380f8d5bo6cef";
  let context =
    "You are a fun poem expert who writes short, 4-line educational poems for kids. Each line must be separated with a <br />. Do not include a title or any explanation. End the poem with 'SheCodes AI' inside a <strong> tag on a new line. Keep the tone playful and suitable for homework topics like maths, science, and life skills.";

  let prompt = `User instructions: Write a 4-line educational poem about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">🔄 Generating a Fun South African homework poem about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#homework-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
