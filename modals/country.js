const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const countrySchema = new Schema({
    name : {
        type : String,
        required : true
    },
    capital : {
        type : String,
        required : true
    },
    region : {
        type : String,
        required : true
    },
    subregion : {
        type : String,
        required : true
    },
    population : {
        type : String,
        required : true
    },
    area : {
        type : String,
        required : true
    },
    flag : {
        type : String,
        required : true
    },
    borders : {
        type : Array,
        required : true
    },
    currencies : {
        type : Array,
        reqired : true
    },
    languages : {
        type : Array,
        required : true
    },
    timezones : {
        type : Array,
        required : true
    },
    callingCodes : {
        type : Array,
        required : true
    }
});

const Country = mongoose.model('Country', countrySchema);

module.exports = Country;