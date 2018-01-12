(function(exports) {
  var idCounter = 0

  function Note(string) {
    this.text = string;
    this.id = idCounter;
    idCounter ++

  };

  Note.prototype.getID = function(){
    return this.id
  }
  exports.Note = Note;

})(this);
