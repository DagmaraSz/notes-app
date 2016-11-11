function Controller(){
  this.notebook = new Notebook();
}

Controller.prototype = {
  addNote: function(){
    var header = this.getHeader();
    var text = this.getText();
    note = new Note(header, text);
    this.notebook.notes.push(note);
    this.updateNoteList();
  },
  getHeader: function() {
    return document.getElementById("header").value;
  },
  getText: function() {
    return document.getElementById("text").value;
  },
  updateNoteList: function() {
    var node = document.createElement("DIV");
    node.setAttribute("id", this.notebook.notes.length);
    var headerContainer = document.createElement("a");
    var desiredLink = "#" + this.notebook.notes.length;
    headerContainer.setAttribute("href", desiredLink);
    var headerText = document.createTextNode(this.notebook.notes[this.notebook.notes.length-1].header);
    headerContainer.appendChild(headerText);
    node.appendChild(headerContainer);
    var noteContainer = document.createElement("P");
    var noteText = document.createTextNode(this.notebook.notes[this.notebook.notes.length-1].shortText);
    noteContainer.appendChild(noteText);
    node.appendChild(noteContainer);
    document.getElementById("left-content").appendChild(node);
  },

  showNote: function(){
    document.getElementById("right-content").innerHTML = "";
    var node = document.createElement("DIV");
    var fullNoteId = controller.getIdFromUrl(window.location)
    var fullNote = controller.notebook.notes[fullNoteId - 1];
    var noteHeader = document.createTextNode(fullNote.header);
    var noteText = document.createTextNode(fullNote.text);
    node.appendChild(noteHeader);
    node.appendChild(noteText);
    document.getElementById("right-content").appendChild(node);
  },

    hashChangeListener: function () {
      window.addEventListener("hashchange", this.showNote);
    },

    getIdFromUrl: function (l) {
      return l.hash.split("#")[1];
    }
};

Controller.prototype.getIdFromUrl = function(l) {
    return l.hash.split("#")[1]
 };

var controller = new Controller();
controller.hashChangeListener();
