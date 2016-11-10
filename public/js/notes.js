function Note(header, text){
  this.header = header;
  this.text = text;
  this.shortText = this.abbreviate();
};

Note.prototype.abbreviate = function() {
  return this.text.substr(0, 20);
}
