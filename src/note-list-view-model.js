
(function(exports){
  function View(list){
    this.list = list;
  }

  View.prototype.returnHTML = function () {
   string = ""
   for (var i=0; i < this.list.returnNotes().length; i ++){
     string += "<li><div>" + this.list.returnNotes()[i].text + "</div></li>";
   };
   return "<ul>" + string + "</ul>"
  };


  exports.View = View;
})(this);
