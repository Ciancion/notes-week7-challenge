
(function(exports){
  function Controller(list = new List(), view = new View(list)){
    // var elem = document.getElementById("app").getElementsByTagName("p");
    // elem[0].innerText = ("howdy")
    this.list = list
    this.view = view;
  }

  Controller.prototype.getList = function(elementID){
    document.getElementById(elementID).innerHTML = this.view.returnHTML();
  };

  exports.Controller = Controller;

})(this);



window.onload = function (){
  controller = new Controller();
  controller.list.createAndAddNote("Hello!!");
  controller.getList("app");
};
