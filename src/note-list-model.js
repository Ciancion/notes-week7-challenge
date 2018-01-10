(function(exports){

  function List() {
    this.notes = [];
  }

  List.prototype.addNote = function(note){
    this.notes.push(note);
  }

  List.prototype.returnNotes = function(){
    return this.notes
  }

  List.prototype.createAndAddNote = function(text){
    var note = new Note(text);
    this.addNote(note);
  }

  exports.List = List;

})(this);
