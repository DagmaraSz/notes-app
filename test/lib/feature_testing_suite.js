function FeatureTest(){};

FeatureTest.prototype.visit = function (url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.responseType = "text";
  xhr.onreadystatechange = function () {
    if(xhr.readyState === XMLHttpRequest.DONE) {
      FeatureTest.xhr = xhr;
      callback();
    }
  };
  xhr.send();
};

FeatureTest.prototype.fillIn = function (field, content) {

};

FeatureTest.prototype.clickButton = function(identifier){

};

FeatureTest.prototype.currentPath = function(){

};

FeatureTest.prototype.toHaveText = function(text){
  if (FeatureTest.xhr.responseText.includes(text)) {
    document.write("<div class=\"passed\">Test Passed</div>")
  } else {
    document.write("<div class=\"failed\">Test Failed</div>")
  }
};

FeatureTest.prototype.statusCode = function () {

};

FeatureTest.prototype.toHaveLink = function () {

};
