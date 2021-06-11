const BASE_URL = "https://restcountries.eu/rest/v2";

function fetchCounties(name) {
  return fetch(`${BASE_URL}/name/${name}`).then((response) => response.json());
}

export default fetchCounties;
