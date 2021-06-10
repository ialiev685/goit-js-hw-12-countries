const BASE_URL = "https://restcountries.eu/rest/v2/name/";

function fetchCounties(name) {
  return fetch(`${BASE_URL}${name}`).then((response) => response.json());
}

export default fetchCounties;
