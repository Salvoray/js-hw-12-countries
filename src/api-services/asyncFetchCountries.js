const BASE_URL = 'https://restcountries.eu/rest/v2/';

const fetchCountries = async searchQuery => {
  const url = `${BASE_URL}name/${searchQuery}`;
  try {
    const res = await fetch(url);
    if (res.ok) {
      return await res.json();
    }
  } catch (error) {
    console.log('error:', error);
  }
};

export default { fetchCountries };
