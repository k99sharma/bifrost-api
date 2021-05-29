// seeding the database
const Country = require('../modals/country');

// importing modules
const fetch = require('node-fetch');
const mongoose = require('mongoose');


// country code array
const countryCode = ["CO", "IN"];

// connecting to database
mongoose.connect('mongodb://localhost:27017/bifrost', 
{
  useNewUrlParser: true, 
  useUnifiedTopology: true
})
  .then(()=>{
    console.log('Database connection successful !');
  })
  .catch(err => {
    console.log('Database connection failed !');
    console.log(err);
  })


  let totalCountriesSaved = 0;

// extracting data and saving in DB
const extractAndSaveCountryData = async (data)=>{
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
    })

    await countryData.save()
        .then(()=>{
            console.log('Country is successfully saved');
            totalCountriesSaved += 1;
        })
        .catch(err => {
            console.log('Unable to save country');
            console.log('Error: ' + err);
        })
}


// function to fetch country data 
const fetchCountry = async ()=>{
    countryCode.map(async code => {
        await fetch(
            `https://restcountries.eu/rest/v2/alpha?codes=${code}`
        )
            .then(res => res.json())
            .then(data => {
                console.log('Fetch is successful');
                extractAndSaveCountryData(data);
            })
            .catch(err => {
                console.log('Error: ' + err);
            })
    });    
}

fetchCountry();
