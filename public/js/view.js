function View(){

}

View.prototype = {
  updateNoteList: function() {
    var node = document.createElement("DIV")
    node.setAttribute("id", controller.notebook.numberOfNotes());
    node.appendChild(this.createHeader());
    node.appendChild(this.createText());
    document.getElementById("left-content").appendChild(node);
  },
  createHeader: function(){
    var headerText = document.createTextNode(this.getLastNote().header);
    var headerContainer = document.createElement("a");
    console.log(headerContainer);
    headerContainer.setAttribute("href", "#" + controller.notebook.numberOfNotes());
    console.log(headerContainer)
    setTimeout(function() {
        return headerContainer.appendChild(headerText);
    }, 500);   
  },
  createText: function(){
    var noteText = document.createTextNode(this.getLastNote().abbreviate());
    return document.createElement("P").appendChild(noteText);
  },

  showNote: function(){
    document.getElementById("right-content").innerHTML = "";
    var node = document.createElement("DIV");
    node.appendChild(this.createTitle());
    node.appendChild(document.createTextNode(fullNote.text));
    document.getElementById("right-content").appendChild(node);
  },

  createTitle: function() {
    var fullNote = controller.notebook.getNote(controller.getIdFromUrl() - 1);
    var noteHeader = document.createTextNode(fullNote.header);
    return document.createElement("H2").appendChild(noteHeader);
  },

  getLastNote: function() {
    return controller.notebook.getNote(controller.notebook.numberOfNotes()-1)
  },
  clearHeader: function() {
    return document.getElementById("header").value = "";
  },
  clearText: function() {
    return document.getElementById("text").value = "";
  },
};
