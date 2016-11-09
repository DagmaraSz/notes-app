function Model(){
  this.notebook = new Notebook();
};

Model.prototype = {
  addNote: function(){
    var header = this.getHeader();
    var text = this.getText();
    console.log(header)
    console.log(text)
    note = new Note(header, text);
    this.notebook.notes.push(note);
    this.updateNoteList();
  },
  getHeader: function() {
    return document.getElementsByName("header")[0].value
  },
  getText: function() {
    return document.getElementsByName("text")[0].value
  },
  updateNoteList(){
    var node = document.createElement("DIV");
    var headerNode = document.createElement("A");
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
