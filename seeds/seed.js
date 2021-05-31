// seeding the database
const Country = require('../modals/country');

// importing modules
const fetch = require('node-fetch');
const mongoose = require('mongoose');

let totalCountriesSaved = 0;

// country code array
const countryCode = [
    "AF", "AX", "AL", "DZ", "AS", "AD", "AO", "AI", "AQ", "AG", "AR", "AM", "AW", "AU", "AT", "AZ",
    "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BA", "BW", "BV", "BR", "VG", "IO", "BN", "BG", "BF", "BI",
    "KH", "CM", "CA", "CV", "KY", "CF", "TD", "CL", "CN", "HK", "MO", "CX", "CC", "CO", "KM", "CG", "CD", "CK", "CR", "CI", "HR", "CU", "CY", "CZ",
    "DK", "DJ", "DM", "DO",
    "EC", "EG", "SV", "GQ", "ER", "EE", "ET",
    "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "TF",
    "GA", "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GU", "GT", "GG", "GN", "GW", "GY",
    "HT", "HM", "VA", "HN", "HU",
    "IS", "IN", "ID", "IR", "IQ", "IE", "IM", "IL", "IT",
    "JM", "JP", "JE", "JO",
    "KZ", "KE", "KI", "KP", "KR", "KW", "KG",
    "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU",
    "MK", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", "MR", "MU", "YT", "MX", "FM", "MD", "MC", "MN", "ME", "MS", "MA", "MZ", "MM",
    "NA", "NR", "NP", "NL", "AN", "NC", "NZ", "NI", "NE", "NG", "NU", "NF", "MP", "NO",
    "OM",
    "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR",
    "QA",
    "RE", "RO", "RU", "RW",
    "BL", "SH", "KN", "LC", "MF", "PM", "VC", "WS", "SM", "ST", "SA", "SN", "RS", "SC", "SL", "SG", "SK", "SI", "SB", "SO", "ZA", "GS", "SS", "ES", "LK", "SD", "SR", "SJ", "SZ", "SE", "CH", "SY",
    "TW", "TJ", "TZ", "TH", "TL", "TG", "TK", "TO", "TT", "TN", "TR", "TM", "TC", "TV",
    "UG", "UA", "AE", "GB", "US", "UM", "UY", "UZ",
    "VU", "VE", "VN", "VI",
    "WF", "EH",
    "YE", "ZM", "ZW" 
];

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
    });

    await countryData.save()
    .then(()=>{
        console.log('Country is successfully saved');
        totalCountriesSaved += 1;
        console.log(`Total countries saved: ${totalCountriesSaved}`);
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
