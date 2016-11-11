function View(){

}

View.prototype = {
  updateNoteList: function() {
    var node = document.createElement("DIV")
                  .setAttribute("id", controller.notebook.numberOfNotes())
                  .appendChild(this.createHeader());
    node.appendChild(this.createText());
    document.getElementById("left-content").appendChild(node);
  },
  createHeader: function(){
    var headerText = document.createTextNode(controller.notebook.getNote(notebook.numberOfNotes()-1).header);
    return document.createElement("a")
            .setAttribute("href", "#" + controller.notebook.numberOfNotes())
            .appendChild(headerText);
  },
  createText(){
    var noteText = document.createTextNode(controller.notebook.getNote(notebook.numberOfNotes()-1).abbreviate());
    return document.createElement("P").appendChild(noteText);
  },
  showNote: function(){
    document.getElementById("right-content").innerHTML = "";
    var node = document.createElement("DIV");

    var h2 = document.createElement("H2");
    var fullNote = controller.notebook.getNote(controller.getIdFromUrl() - 1);
    var noteHeader = document.createTextNode(fullNote.header);
    h2.appendChild(noteHeader);

    node.appendChild(h2);

    var noteText = document.createTextNode(fullNote.text);
    node.appendChild(noteText);

    document.getElementById("right-content").appendChild(node);
  },

  clearHeader: function() {
    return document.getElementById("header").value = "";
  },
  clearText: function() {
    return document.getElementById("text").value = "";
  },
};
