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
  var node = document.createElement("div");
  if (FeatureTest.xhr.responseText.includes(text)) {
    var textnode = document.createTextNode("Test Passed");
    node.appendChild(textnode);
    node.className = "passed";
    document.getElementById("body").appendChild(node);
  } else {
    var textnode = document.createTextNode("Test Failed");
    node.appendChild(textnode);
    node.className = "failed";
    document.getElementById("body").appendChild(node);
  }
};

FeatureTest.prototype.statusCode = function () {

};

FeatureTest.prototype.toHaveLink = function () {

};
