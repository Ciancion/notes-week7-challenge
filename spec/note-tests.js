
function testReturnText() {
  var note = new Note("Hello");

  assert.isTrue(note.text === "Hello", "Tests that the description is returned");
};
testReturnText();

function testNoteId(){
  var idCounter = 0
  var note2 = new Note("Vale")

  assert.isTrue(note2.getID() === 1, "Checks that it returns correct note ID ")
};
testNoteId()
