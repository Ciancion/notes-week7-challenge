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

  Note.prototype.getText = function(){
    return this.text
  }
  exports.Note = Note;

})(this);
