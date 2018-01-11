
(function(exports){
  function Controller(list = new List(), view = new View(list)){
    this.list = list
    this.view = view;
  }

  Controller.prototype.getList = function(elementID){
    document.getElementById(elementID).innerHTML = this.view.returnHTML();
  };

  exports.Controller = Controller;

})(this);
