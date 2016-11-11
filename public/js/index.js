function Controller(){
  this.notebook = new Notebook();
}

Controller.prototype = {
  addNote: function(){
    this.notebook.addNote(this.getHeader(), this.getText());
    view.clearHeader();
    view.clearText();
    view.updateNoteList();
  },
  getHeader: function() {
    return document.getElementById("header").value;
  },
  getText: function() {
    return document.getElementById("text").value;
  },
  getIdFromUrl: function () {
    return window.location.hash.split("#")[1];
  },
  hashChangeListener: function () {
    window.addEventListener("hashchange", this.showNote);
  },
};

// Controller.prototype.getIdFromUrl = function(l) {
//     return l.hash.split("#")[1]
//  };
var view = new View();
var controller = new Controller();
controller.hashChangeListener();
