(function(exports){
  function SingleView(note){
    this.note = note
  }

  SingleView.prototype.returnSingleNoteHTML = function () {
   var singleNote = this.note;
   console.log(singleNote.id)
   return "<ul><li><a href='#" + singleNote.id + "'>" + singleNote.text.slice(0, 20) + "</a></li>"  +
   "</li></ul>"
  };


  exports.SingleView = SingleView;
})(this);
