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
          var parser = new DOMParser();
          FeatureTest.page = parser.parseFromString(xhr.responseText, "text/xml");
          callback();
       }
    };
  xhr.send();
};

FeatureTest.prototype.clickButton = function(id){
  console.log(FeatureTest.page);
  console.log(FeatureTest.page.getElementById(id));
  // var myWindow = window.open();
  // myWindow.document.write(FeatureTest.page);

  FeatureTest.page.getElementById(id).dispatchEvent(new MouseEvent('click'));
};

FeatureTest.prototype.fillIn = function (field, content) {
  console.log("fillin");
  var input = FeatureTest.page.getElementsByName(field);
  input.textContent = content;
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
