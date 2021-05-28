// seeding the database
const Country = require('../modals/country');

const fetch = require('node-fetch');

// extracting data 
const extractCountryData = async (data)=>{
    // countryData = {
    //     name : data[0].name,
    //     capital : data[0].capital,
    //     region : data[0].region,
    //     subregion : data[0].subregion,
    //     population : data[0].population,
    //     area : data[0].area,
    //     nativeName : data[0].nativeName,
    //     flag : data[0].flag
    // }
    const countryData = new Country({
        name : data[0].name,
        capital : data[0].capital,
        region : data[0].region,
        subregion : data[0].subregion,
        population : data[0].population,
        area : data[0].area,
        flag : data[0].flag,
        borders : data[0].borders,
        currencies : data[0].currencies,
        languages : data[0].languages,
        timezones : data[0].timezones,
        callingCodes : data[0].callingCodes
    });

    console.log(countryData);
}

// function to fetch country data 
const fetchCountry = async ()=>{
    await fetch(
        'https://restcountries.eu/rest/v2/alpha?codes=CO'
    )
        .then(res => res.json())
        .then(data => {
            console.log('Fetch is successful');
            extractCountryData(data);
        })
        .catch(err => {
            console.log('Error: ' + err);
        })
}

fetchCountry();