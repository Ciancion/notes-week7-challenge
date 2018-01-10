function testReturnSingleNote(){
  var list = new List();
  list.createAndAddNote("Bye bye!");
  list.createAndAddNote("Valentina :)");
  var note = list.returnNotes()[1]
  var singleView = new SingleView(note)

  assert.isTrue(singleView.returnSingleNoteHTML() === "<ul><li><div>Valentina :)</div></li></ul>", "View a single note from a list");


}

testReturnSingleNote()
