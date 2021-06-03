# Bifrost RESTful API
Get information about countries in the world via Bifrost

# API Endpoints
Available endpoints that can be used for searching countries

## Name
Search country by name
``` javascript
https://ghost-32-bifrost.herokuapp.com/bifrost/v1.0/country?name={name}
```
``` html
https://ghost-32-bifrost.herokuapp.com/bifrost/v1.0/country?name=brazil
```

Acceptable names are listed in `codeList` file in `countryCodeList` folder


# Response Format
``` html
https://ghost-32-bifrost.herokuapp.com/bifrost/v1.0/country?name=canada
```
``` json 
{
    "latlng": [
        60,
        -95
    ],
    "borders": [
        "USA"
    ],
    "currencies": [
        {
            "code": "CAD",
            "name": "Canadian dollar",
            "symbol": "$"
        }
    ],
    "languages": [
        {
            "iso639_1": "en",
            "iso639_2": "eng",
            "name": "English",
            "nativeName": "English"
        },
        {
            "iso639_1": "fr",
            "iso639_2": "fra",
            "name": "French",
            "nativeName": "français"
        }
    ],
    "timezones": [
        "UTC-08:00",
        "UTC-07:00",
        "UTC-06:00",
        "UTC-05:00",
        "UTC-04:00",
        "UTC-03:30"
    ],
    "callingCodes": [
        "1"
    ],
    "name": "Canada",
    "code": "CA",
    "capital": "Ottawa",
    "region": "Americas",
    "subregion": "Northern America",
    "population": "36155487",
    "area": "9984670",
    "flag": "https://restcountries.eu/data/can.svg"
}
```

# Source

- Data is collected from [RESTcountries](https://restcountries.eu/#api-endpoints-code) API 
