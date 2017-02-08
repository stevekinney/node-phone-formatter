function normalize(phoneNumber) {
  return phoneNumber.replace(
    /^[\+\d{1,3}\-\s]*\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
    "$1$2$3"
  );
}

function format(phoneNumber, formatString, options) {
  // Normalize the phone number first unless not asked to do so in the options
  if (!options || !options.normalize) {
    phoneNumber = normalize(phoneNumber)
  };
  for ( var i = 0, l = phoneNumber.length; i < l; i++ ) {
    formatString = formatString.replace('N', phoneNumber[i]);
  }

  return formatString;
}

module.exports = {
  normalize: normalize,
  format: format
};