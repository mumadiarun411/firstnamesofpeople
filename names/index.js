const getFirstName = require("../utilities/utils/index");
const peopleNames = require("../country/state/city/index");

function getPeopleInCity(peopleNames) {
  return getFirstName(peopleNames);
}

module.exports = getPeopleInCity;
