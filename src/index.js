import fetchCounties from "./js/fetchCountries.js";
import refs from "./js/getRefs.js";
import { templateList, templateOneCountry } from "./js/template.js";

refs.inputEl.addEventListener("input", _.debounce(onInputAdd, 500));

function onInputAdd(event) {
  const queryName = event.target.value;
  fetchCounties(queryName).then(renderCountries);
}

function renderCountries(data) {
  console.log("длинна:", data.length);

  if (data.length >= 2 || data.length <= 10) {
    createList(data);
  }
  if (data.length === 1) {
    createDescriptionOneCountry(data);
  }
}

function createList(listCountries) {
  console.log(listCountries);
  const markup = templateList(listCountries);
  refs.divContentEl.innerHTML = markup;
}

function createDescriptionOneCountry(descOneCountry) {
  console.log(descOneCountry);

  const markup = templateOneCountry(descOneCountry);
  console.log(markup);
  refs.divContentEl.innerHTML = markup;
}
