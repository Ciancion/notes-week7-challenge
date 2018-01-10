(function(exports){
  function SingleView(note){
    this.note = note
  }

  SingleView.prototype.returnSingleNoteHTML = function () {
   var singleNote = this.note;
   string = "<li><div>" + singleNote.text + "</div></li>";
   return "<ul>" + string + "</ul>"
  };

  exports.SingleView = SingleView;
})(this);
