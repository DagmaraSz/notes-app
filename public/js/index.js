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
    var headerNode = document.createElement("a");
    var desiredLink = "#";
    headerNode.setAttribute("href", desiredLink);
    var headerTextNode = document.createTextNode(this.notebook.notes[this.notebook.notes.length-1].header);
    headerNode.appendChild(headerTextNode);
    node.appendChild(headerNode);
    var noteNode = document.createElement("P");
    var noteTextNode = document.createTextNode(this.notebook.notes[this.notebook.notes.length-1].text);
    noteNode.appendChild(noteTextNode);
    node.appendChild(noteNode);
    document.getElementById("left-content").appendChild(node);
  }
};
