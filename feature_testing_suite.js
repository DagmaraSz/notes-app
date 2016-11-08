function FeatureTest(){}

FeatureTest.prototype.visit = function (url) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.responseType = "text";
  xhr.send();
  return xhr;
};

FeatureTest.prototype.fillIn = function (field, content, xhr) {
  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(xhr.responseText, "text/xml");
  console.log(xmlDoc);
  var input = xmlDoc.getElementsByName(field);
  input.textContent = content;
};

FeatureTest.prototype.clickButton = function(identifier, xhr){
  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(xhr.responseText, "text/xml");
  console.log(xmlDoc);
  console.log(xmlDoc.getElementById("chad"));
  xmlDoc.getElementById("chad").click();
};

FeatureTest.prototype.toHaveText = function(){

};


// FeatureTest.prototype.currentPath = function(){
//
// };

// FeatureTest.prototype.statusCode = function () {
//
// };

// FeatureTest.prototype.toHaveLink = function () {
//
// };
