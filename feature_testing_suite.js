function FeatureTest(){}

FeatureTest.prototype.visit = function (url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.responseType = "text";
  console.log("hi");
  xhr.onreadystatechange = function () {
      console.log(2);
      if(xhr.readyState === XMLHttpRequest.DONE /*&& xhr.status === 200 */) {
          console.log(3);
          callback();
       }
    };
  xhr.send();
};

FeatureTest.prototype.fillIn = function (field, content, xhr) {
  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(xhr.responseText, "text/xml");
  console.log(xmlDoc);
  var input = xmlDoc.getElementsByName(field);
  input.textContent = content;
};

FeatureTest.prototype.clickButton = function(id){
  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(xhr.responseText, "text/xml");
  console.log(xmlDoc);
  console.log(xmlDoc.getElementById(id));
  xmlDoc.getElementById(id).click();
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
