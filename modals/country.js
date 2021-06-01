const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const countrySchema = new Schema({
    name : {
        type : String
    },
    code : {
        type : String
    },
    capital : {
        type : String
    },
    region : {
        type : String
    },
    subregion : {
        type : String
    },
    population : {
        type : String
    },
    area : {
        type : String
    },
    latlng : {
        type : Array
    },
    flag : {
        type : String
    },
    borders : {
        type : Array
    },
    currencies : {
        type : Array
    },
    languages : {
        type : Array
    },
    timezones : {
        type : Array
    },
    callingCodes : {
        type : Array
    }
});

const Country = mongoose.model('Country', countrySchema);

module.exports = Country;