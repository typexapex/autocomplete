// TODO: Autocomplete the input with AJAX calls.
// https://wagon-dictionary.herokuapp.com/autocomplete/:stem

const input = document.querySelector("#search");
const button = document.querySelector("#submit");
const results = document.querySelector("#results");

input.addEventListener("keyup", (event) => {
  event.preventDefault();
  const url = `https://wagon-dictionary.herokuapp.com/autocomplete/${input.value}`;
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      results.innerHTML = "";
      data.words.forEach((word) => {
        results.insertAdjacentHTML("beforeEnd",
          `<li class="list-inline-item">
            <p>${word}<p>
          </li><br>`);
      });
    });
});
