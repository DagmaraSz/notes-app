var assert =  {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      document.write("<div class=\"failed\">Test Failed</div>")
    }
    else {
    	document.write("<div class=\"passed\">Test Passed</div>")
    }
  },

  isFalse: function(assertionToCheck) {
  	if (assertionToCheck) {
  		document.write("<div class=\"failed\">Test Failed</div>")
  	}
		else {
			document.write("<div class=\"passed\">Test Passed</div>")
		}
  },

  toBe: function(currentValue, assertionToCheck) {
  	if (assertionToCheck === currentValue) {
  		document.write("<div class=\"passed\">Test Passed</div>")
  	}
		else {
			document.write("<div class=\"failed\">Test Failed</div>")
		}
  },

  notToBe: function(currentValue, assertionToCheck) {
  	if (assertionToCheck === currentValue) {
  		document.write("<div class=\"failed\">Test Failed</div>")
  	}
		else {
			document.write("<div class=\"passed\">Test Passed</div>")
		}
  },

  toContain: function(currentValue, assertionToCheck) {
  	if(currentValue.includes(assertionToCheck)) {
  	  document.write("<div class=\"passed\">Test Passed</div>")
  	} else {
  		document.write("<div class=\"failed\">Test Failed</div>")
  	}
  },

  notToContain: function(currentValue, assertionToCheck) {
  	if(currentValue.includes(assertionToCheck)) {
  	  document.write("<div class=\"failed\">Test Failed</div>")
  	} else {
  		document.write("<div class=\"passed\">Test Passed</div>")
  	}
  },

  toRaise: function(block, assertionToCheck) {
    try {block();}
    catch(err) {if (err === assertionToCheck) {
      document.write("<div class=\"passed\">Test Passed</div>");
    } else {
      document.write("<div class=\"failed\">Test Failed</div>")
    }}
  }
};
