(function(exports){
  function SingleView(note){
    this.note = note
  }

  SingleView.prototype.returnSingleNoteHTML = function () {
   var singleNote = this.note;
   return "<li><a href='#" + singleNote.id + "'>" + singleNote.text.slice(0, 20) + "</a></li>"

  };


  exports.SingleView = SingleView;
})(this);
