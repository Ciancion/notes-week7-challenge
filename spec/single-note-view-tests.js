function testReturnSingleNote(){
  var list = new List();
  var noteDouble = new NoteDouble
  var singleView = new SingleView(noteDouble);

  list.addNote(noteDouble)

  function NoteDouble() {
    this.id = 1
    this.text = "12345678901234567890this bit shouldn't appear"
  }

  assert.isTrue(singleView.returnSingleNoteHTML() === "<li><a href='#1'>12345678901234567890</a></li>", "Views a single note from a list");


}

testReturnSingleNote()
