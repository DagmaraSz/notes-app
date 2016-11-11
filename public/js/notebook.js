function Notebook(){
  this.notes = [];
};

Notebook.prototype.getNote = function (index) {
  return this.notes[index];
};

Notebook.prototype.numberOfNotes = function () {
  return this.notes.length;
};

Notebook.prototype.addNote = function (header, text) {
  this.notes.push(new Note(header, text));
};
