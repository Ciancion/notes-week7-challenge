window.onload = function (){
  controller = new Controller();
  controller.list.createAndAddNote("Hello!!");
  controller.list.createAndAddNote("Hello Valentina !!!!!");
  // console.log(controller.list.notes[0].id)
  controller.getList("app");


};
