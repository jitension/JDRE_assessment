// Get an instance of `PhoneNumberUtil` and `PhoneNumberFormat`.
let PNF = require("google-libphonenumber").PhoneNumberFormat;
let phoneUtil = require("google-libphonenumber").PhoneNumberUtil.getInstance();

function normalizeNumber(number) {
  try {
    //Parse the number
    let tel = phoneUtil.parse(number, "US");
    //Check if it is from US
    if (phoneUtil.isValidNumberForRegion(tel, "US")) {
      return phoneUtil.format(tel, PNF.E164);
    } else return "Number is not from United States";
    //Catch for any error thrown during parsing or region checking
  } catch (err) {
    return null;
  }
}

let result = normalizeNumber("+1789-999-6149");
console.log(result);
