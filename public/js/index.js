function Model(){};

Model.prototype = {
  addNote: function(header, text){
    this.getHeaderFromUrl();
    note = new Note(header, text);

  },
  getHeaderFromUrl: function() {
    console.log(window.location);
  }


};
