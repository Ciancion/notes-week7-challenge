
(function(exports){
  function View(list){
    this.list = list;
  }

  View.prototype.returnHTML = function () {
    return "<ul>" +
    this.list.returnNotes().map( note => "<li><a href='#" + note.id + "'>" + note.text.slice(0, 20) + "</a></li>" ).join("") +
    "</li></ul>"
    }

    exports.View = View;
  })(this);
