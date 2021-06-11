import fetchCounties from "./js/fetchCountries.js";
import refs from "./js/getRefs.js";
import { templateList, templateOneCountry } from "./js/template.js";

import "@pnotify/core/dist/BrightTheme.css";
import "@pnotify/core/dist/Material.css";
import { alert, defaultModules } from "@pnotify/core/dist/PNotify.js";
import * as PNotifyMobile from "@pnotify/mobile/dist/PNotifyMobile.js";

defaultModules.set(PNotifyMobile, {});

refs.inputEl.addEventListener("input", _.debounce(onInputAdd, 500));

function onInputAdd(event) {
  const queryName = event.target.value;
  fetchCounties(queryName).then(checkCountCountries).catch(showMessage);
}

function checkCountCountries(data) {
  if (data.status) {
    const msg = `Код ошибки: ${data.status}. ${data.message}`;
    showMessage(msg);
    return;
  }

  if (data.length === 1) {
    renderMarkup(...data, templateOneCountry);
  } else if (data.length >= 2 && data.length <= 10) {
    renderMarkup(data, templateList);
  } else if (data.length > 10) {
    const msg =
      "Найдено cлишком много совпадений. Пожалуйста, введите более конкретный запрос";
    showMessage(msg);
  }
}

function renderMarkup(data, callbackTamplate) {
  const markup = callbackTamplate(data);
  refs.divContentEl.innerHTML = markup;
}

function showMessage(msg) {
  alert({
    text: msg,
    delay: 2000,
  });
}

// function checkCountCountries(data) {
//   if (data.length === 1) {
//     createDescriptionOneCountry(data);
//   } else if (data.length >= 2 || data.length <= 10) {
//     createList(data);
//   }
// }

// function createList(listCountries) {
//   const markup = templateList(listCountries);
//   renderMarkup(markup);
// }

// function createDescriptionOneCountry([descOneCountry]) {
//   const markup = templateOneCountry(descOneCountry);
//   renderMarkup(markup);
// }

// function renderMarkup(markup) {
//   refs.divContentEl.innerHTML = markup;
// }
