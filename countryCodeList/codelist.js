const CODE_LIST = {
    "india" : "IN",
    "columbia" : "CO"
}

module.exports.findCountryCode = (name) => {
    return CODE_LIST[name];
}
