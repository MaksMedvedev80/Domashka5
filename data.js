// Данные о пивоварнях в формате JSON
const breweriesJSON = `[
  {
      "id": "0759476d-8fed-46cc-abec-1cb02cbca0d6",
      "name": "Running Dogs Brewery",
      "brewery_type": "proprietor",
      "address_1": "291 S 1st St,St.",
      "address_2": null,
      "address_3": null,
      "city": "Saint Helens",
      "state_province": "Oregon",
      "postal_code": "97051",
      "country": "United States",
      "longitude": "-122.7980095",
      "latitude": "45.86251169",
      "phone": "5033971103",
      "website_url": "http://www.runningdogsbrewery.com",
      "state": "Oregon",
      "street": "291 S 1st St,St."
  },
  {
      "id": "189df38b-d6a6-40c0-917e-5b172be8d859",
      "name": "Sea Dog Brewing",
      "brewery_type": "micro",
      "address_1": "1 Main St",
      "address_2": null,
      "address_3": null,
      "city": "Camden",
      "state_province": "Maine",
      "postal_code": "04843-1703",
      "country": "United States",
      "longitude": "-69.064576",
      "latitude": "44.209809",
      "phone": null,
      "website_url": "http://www.seadogbrewing.com",
      "state": "Maine",
      "street": "1 Main St"
  },
  {
      "id": "2907b143-57b4-49ec-aa41-07df64d1e14b",
      "name": "Barrel Dog Brewing",
      "brewery_type": "micro",
      "address_1": null,
      "address_2": null,
      "address_3": null,
      "city": "Evergreen",
      "state_province": "Colorado",
      "postal_code": "80439",
      "country": "United States",
      "longitude": "-105.321458",
      "latitude": "39.6361637",
      "phone": "5599176846",
      "website_url": null,
      "state": "Colorado",
      "street": null
  }
]`;

// Преобразуем JSON в объект JavaScript
const breweriesData = JSON.parse(breweriesJSON);

// Получаем контейнер для отображения пивоварен
const breweriesContainer = document.querySelector('.breweries');

// Отображаем информацию о пивоварнях на странице
breweriesData.forEach(brewery => {
  const breweryElement = document.createElement('div');
  breweryElement.classList.add('brewery');

  const titleElement = document.createElement('h2');
  titleElement.textContent = brewery.name;

  const typeElement = document.createElement('p');
  typeElement.textContent = `Type: ${brewery.brewery_type}`;

  const addressElement = document.createElement('p');
  addressElement.textContent = `Address: ${brewery.address_1 ? brewery.address_1 : 'Address not available'}, ${brewery.city ? brewery.city : 'City not available'}, ${brewery.state_province ? brewery.state_province : 'State/Province not available'}, ${brewery.country ? brewery.country : 'Country not available'}`;

  const phoneElement = document.createElement('p');
  phoneElement.textContent = `Phone: ${brewery.phone ? brewery.phone : 'Phone not available'}`;

  const websiteElement = document.createElement('a');
  websiteElement.textContent = 'Website';
  websiteElement.href = brewery.website_url;
  websiteElement.target = '_blank';

  breweryElement.appendChild(titleElement);
  breweryElement.appendChild(typeElement);
  breweryElement.appendChild(addressElement);
  breweryElement.appendChild(phoneElement);
  breweryElement.appendChild(websiteElement);

  breweriesContainer.appendChild(breweryElement);
});
