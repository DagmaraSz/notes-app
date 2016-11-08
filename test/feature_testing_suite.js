function FeatureTest(){};

FeatureTest.prototype.visit = function (url) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.responseType = "document";
  xhr.send();
  return xhr;
};

FeatureTest.prototype.fillIn = function (field, content) {

};

FeatureTest.prototype.clickButton = function(identifier){

};

FeatureTest.prototype.currentPath = function(){

};

FeatureTest.prototype.toHaveText = function(){

};

FeatureTest.prototype.statusCode = function () {

};

FeatureTest.prototype.toHaveLink = function () {

};
