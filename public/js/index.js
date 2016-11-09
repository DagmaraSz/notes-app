function Model(){};

Model.prototype = {
  addNote: function(){
    var header = this.getHeaderFromUrl();
    var text = this.getHeaderFromUrl();
    note = new Note(header, text);

  },
  getHeaderFromUrl: function() {
    console.log(window.location);
  }


};
