function testInitialize() {
  var list = new List();
  list.createAndAddNote("Hello Vale");
  var controller = new Controller(list);

  assert.isTrue(controller instanceof Controller, "Checks that controller is an istance of Controller")

}


function testInnerHTML(){
  var ListDouble = function(){
    ListDouble.prototype.returnNotes = function(){
      return "[Fav food: pesto]";
    };
  };

  var ViewDouble = function(){
    ViewDouble.prototype.returnHTML = function(){
      return "<ul><li><div>Fav food: pest</div></li></ul>"
    }
  }

  var list = new ListDouble();
  var view = new ViewDouble();
  var controller = new Controller(list, view);
  var html = controller.view.returnHTML();
  controller.getList('app');

  assert.isTrue(document.getElementById('app').innerHTML  === html, "Returns the list in HTML")
}


window.onload = function(){
  testInitialize()
  testInnerHTML()
};
