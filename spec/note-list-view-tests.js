function testForReturnHTMLNote(){
  var list = new List();
  var view = new View(list);
  var noteDouble = new NoteDouble
  list.addNote(noteDouble)

  function NoteDouble() {
    this.id = 1
    this.text = "12345678901234567890this bit shouldn't appear"
  }
  assert.isTrue(view.returnHTML() == "<ul><li><a href='#1'>12345678901234567890</a></li></li></ul>", "Prints IDs and first 20 characters of the message");
}

testForReturnHTMLNote();

function testForReturnFirst20HTMLNote(){

  var list = new List();
  var view = new View(list);
  var noteDouble = new NoteDouble
  list.addNote(noteDouble)

  function NoteDouble() {
    this.id = 1
    this.text = "Hello 123456789 123456789"
  }

  assert.isTrue(view.returnHTML() === "<ul><li><a href='#1'>Hello 123456789 1234</a></li></li></ul>", "Shows only the first 20 characters of each note");
};
testForReturnFirst20HTMLNote();
