import _debounce from 'lodash.debounce';
import countriesListTpl from '../templates/countries-list.hbs';
import countryCardTpl from '../templates/country-card.hbs';

const inputRef = document.querySelector('#country-input');
const countryContainerRef = document.querySelector('#country-container');

const fetchCountries = e => {
  if (e.target.value != '') {
    return fetch(`https://restcountries.eu/rest/v2/name/${e.target.value}`)
      .then(res => {
        return res.json();
      })
      .then(countries => {
        const markupList = countriesListTpl(countries);
        const markupCountryCard = countryCardTpl(countries);
        if (countries.length <= 10 && countries.length != 1) {
          countryContainerRef.innerHTML = markupList;
        } else if (countries.length === 1) {
          countryContainerRef.innerHTML = markupCountryCard;
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
};

const onInputChange = e => {
  fetchCountries(e);
};

inputRef.addEventListener('input', _debounce(onInputChange, 500));
