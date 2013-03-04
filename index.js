module.exports = {
  
  normalize: function extract(phoneNumber) {

  	return phoneNumber.replace(
  		/^[\+\d{1,3}\-\s]*\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
  		"$1$2$3"
  	);
    
  },

  format: function format(phoneNumber, formatString, options) {
    
    if (options && options.normalize === true) {
      phoneNumber = this.normalize(phoneNumber)
    };
    
  	for ( var i = 0, l = phoneNumber.length; i < l; i++ ) {
  		formatString = formatString.replace("N", phoneNumber[i]);
  	}
    
  	return formatString;
    
  },
  
};