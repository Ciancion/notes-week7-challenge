
(function(exports){
  function View(list){
    this.list = list;
  }

  View.prototype.returnHTML = function () {

   string = ""

   for (var i=0; i < this.list.returnNotes().length; i ++){
     string += "<li><div>" + this.list.returnNotes()[i].text.slice(0, 20) + "</div></li>";

   console.log(string)

   };
   return "<ul>" + string + "</ul>"
  };


  exports.View = View;
})(this);
