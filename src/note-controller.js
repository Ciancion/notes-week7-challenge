window.onload = function (){

(function(exports){
  function Controller(){
    var elem = document.getElementById("app").getElementsByTagName("p");
    elem[0].innerText = ("howdy")
    console.log(elem)
  }
  exports.Controller = Controller;

})(this);

controller = new Controller

}
