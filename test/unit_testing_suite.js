var assert =  {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      document.write("Test Failed")
    }
    else {
    	document.write("Test Passed")
    }
  },

  isFalse: function(assertionToCheck) {
  	if (assertionToCheck) {
  		document.write("Test Failed")
  	}
		else {
			document.write("Test Passed")
		}
  },

  toBe: function(currentValue, assertionToCheck) {
  	if (assertionToCheck === currentValue) {
  		document.write("Test Passed")
  	}
		else {
			document.write("Test Failed")
		}
  },

  notToBe: function(currentValue, assertionToCheck) {
  	if (assertionToCheck === currentValue) {
  		document.write("Test Failed")
  	}
		else {
			document.write("Test Passed")
		}
  },

  toContain: function(currentValue, assertionToCheck) {
  	if(currentValue.includes(assertionToCheck)) {
  	  document.write("Test Passed")
  	} else {
  		document.write("Test Failed")
  	}
  },

  notToContain: function(currentValue, assertionToCheck) {
  	if(currentValue.includes(assertionToCheck)) {
  	  document.write("Test Failed")
  	} else {
  		document.write("Test Passed")
  	}
  }
};