(function(exports){
  function SingleView(note){
    this.note = note
  }

  SingleView.prototype.returnSingleNoteHTML = function () {
   var singleNote = this.note;
   // console.log(singleNote.text)
   return "<li><a href='#" + singleNote.id + "'>" + singleNote.text.slice(0, 20) + "</a></li>"

  }

  SingleView.prototype.returnSingleNoteText = function(){

    return this.note.text
  }


  exports.SingleView = SingleView;
})(this);
