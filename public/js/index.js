function Model(){
  this.notebook = new Notebook();
}

Model.prototype = {
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
    var noteText = document.createTextNode(this.notebook.notes[this.notebook.notes.length-1].text);
    noteContainer.appendChild(noteText);
    node.appendChild(noteContainer);
    document.getElementById("left-content").appendChild(node);
  },

  showNote: function(){
    var node = document.createElement("DIV");
    var fullNoteId = getIdFromUrl(window.location) 
    console.log(fullNoteId)
    var fullNote = this.notebook.notes[0]
    console.log(fullNote)
    var noteText = document.createTextNode(fullNote.text);
    node.appendChild(noteText);
    document.getElementById("right-content").appendChild(node);
     
  }
};
