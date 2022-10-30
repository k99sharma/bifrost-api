// importing model
const Country = require('../modals/country');

// country alpha2Code list
const {findCountryCode} = require('../countryCodeList/codelist');

// function to fetch country
exports.getCountryData = async (req, res) => {
    const countryName = req.query.name;
    const countryCode = findCountryCode(countryName);

    const country = await Country.findOne({
        code : countryCode
    });

    console.log(country + " " + countryCode)
    if(!country){
        return res.status(404).send({ error : "Data not found"});
    }
    res.status(200).send(country);
}
