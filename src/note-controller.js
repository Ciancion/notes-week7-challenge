window.onload = function (){

(function(exports){
  function Controller(){
    var elem = document.getElementById("app").getElementsByTagName("p");
    elem[0].innerText = ("howdy")
  }

  Controller.prototype.getList = function(list){
    var note = new Note();
    note.addNote("Favourite drink: seltzer");
    var view = new View(list);
    view.returnHTML();

  }
  exports.Controller = Controller;

})(this);

controller = new Controller

}
