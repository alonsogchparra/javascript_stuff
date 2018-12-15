var content = {
  cities: [{
      _id: "5c10117b1e5a912f39331ad0",
      name: "Adrar",
      countryName: "Algeria",
      operations: true,
      __v: 0
    },
    {
      _id: "5c1013241e5a912f39331ad3",
      name: "Ain Defla",
      countryName: "Algeria",
      operations: true,
      __v: 0
    },
    {
      _id: "5c1013581e5a912f39331ad4",
      name: "Ain Temouchent",
      countryName: "Algeria",
      operations: true,
      __v: 0
    },
    {
      _id: "5c1012721e5a912f39331ad1",
      name: "Badakhshan",
      countryName: "Afghanistan",
      operations: true,
      __v: 0
    },
    {
      _id: "5c1012ad1e5a912f39331ad2",
      name: "Berat",
      countryName: "Albania",
      operations: true,
      __v: 0
    },
    {
      _id: "5c1014631e5a912f39331ad5",
      name: "Bulqize",
      countryName: "Albania",
      operations: true,
      __v: 0
    }
  ]
};

var unique = (array, key) => {
  var seenValues = new Set;

  return array.filter(item => {

    var value = item[key];

    if (seenValues.has(value)) {
      return false;
    } 

    seenValues.add(value);
    return true;
  })
};

var oneCounrtyPerCity = unique (content.cities, 'countryName');
var contentCountries = [];

for (var country of oneCounrtyPerCity) {
  contentCountries.push(country.countryName);
}

console.log('No Duplicates Countries', contentCountries);