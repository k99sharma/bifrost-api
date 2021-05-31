const Country = require('../modals/country');

const {findCountryCode} = require('../countryCodeList/codelist');

module.exports.getCountryData = async (req, res) => {
    const countryName = req.query.name;
    const countryCode = findCountryCode(countryName);

    const country = await Country.findOne({
        code : countryCode
    })
        .then((country)=>{
            res.send(country);
        })
        .catch(err => {
            console.assert('Error: ' + err);
        })
};