
function testForReturnHTML(){
  var list = new List();
  var view = new View(list);
  assert.isTrue(view.returnHTML() === "<ul></ul>", "Convert empty string to a html")
}
testForReturnHTML()

function testForReturnHTMLNote(){
  var list = new List();
  var view = new View(list);
  var note = new Note("Hello");

  list.addNote(note);
  assert.isTrue(view.returnHTML() === "<ul><li><div>Hello</div></li></ul>", "Convert one note to a html");
};
testForReturnHTMLNote();

function testForReturnFirt20HTMLNote(){
  var list = new List();
  var view = new View(list);
  var note = new Note("Hello");

  list.addNote(note);
  assert.isTrue(view.returnHTML() === "<ul><li><div>Hello 123456789 123456789</div></li></ul>", "Shows only the first 20 characters of each note");
};
testForReturnFirt20HTMLNote();
