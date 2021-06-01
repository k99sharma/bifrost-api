const Country = require('../modals/country');

const {findCountryCode} = require('../countryCodeList/codelist');

exports.getCountryData = async (req, res) => {
    const countryName = req.query.name;
    const countryCode = findCountryCode(countryName);

    const country = await Country.findOne({
        code : countryCode
    });


    if(!country){
        return res.status(404).send({ error : "Data not found"});
    }
    res.status(200).send(country);
}