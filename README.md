<h1 align='center'>Bifrost API</h1>

<p align='center'>
  <a href="https://opensource.org/licenses/MIT">
  <img alt="License" src="https://img.shields.io/github/license/k99sharma/earth-model"/>
  </a>
    
  <a>
    <img alt="tag" src="https://img.shields.io/github/v/tag/k99sharma/bifrost-api" />
  </a>
</p>

<p align='center'>
    🏹 Get information about countries in the world via Bifrost.
</p>

![123535532-0d8ba100-d742-11eb-8a67-d898322a6181](https://user-images.githubusercontent.com/54969439/194126641-0460f882-b180-4950-a0a5-447f96fa3e02.png)

## Tech Stack & Open-source libraries

- [NodeJs](https://nodejs.org/en/) and [ExpressJs](https://expressjs.com/) is used to create a REST API.
- [MongoDB](https://www.mongodb.com/) is used as database to store information about the countries.
- [Postman](https://www.postman.com/) is used for API testing.

## API Endpoints
Available endpoints that can be used for searching countries

### Name
Search country by name
``` javascript
https://ghost-32-bifrost.herokuapp.com/bifrost/v1.0/country?name={name}
```
``` html
https://ghost-32-bifrost.herokuapp.com/bifrost/v1.0/country?name=brazil
```

Acceptable names are listed in `codeList` file in `countryCodeList` folder


### Response Format
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

## Source
- Data is collected from [RESTcountries](https://restcountries.eu/#api-endpoints-code) API

## Find this repository userful? :heart:
Star the repository. 🌟
<br>Also, __[Follow me](https://github.com/k99sharma)__ on GitHub for my next creations! 😎

# LICENSE
```xml
Designed and developed by 2021 (Kalash Sharma)

Licensed under the MIT License, (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   https://opensource.org/licenses/MIT

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

