function testAddNote(){

  var list = new List();
  var note = new Note("Hello");

  list.addNote(note);

  assert.isTrue(list.notes[0] === note);

};
testAddNote();

function testReturnNotes(){

  var list = new List();

  var note = new Note("Hello");
  var note2 = new Note("Val");

  list.addNote(note);
  list.addNote(note2);

  assert.isTrue(list.returnNotes()[0] === note,  "Returns the note Hello");
  assert.isTrue(list.returnNotes()[1] === note2,  "Returns the note Val");

};

testReturnNotes();

function testReturnNotesText(){

  var list = new List();

  var note = new Note("Hello");
  var note2 = new Note("Val");

  list.addNote(note);
  list.addNote(note2);

  assert.isTrue(note.text === "Hello");
  assert.isTrue(note2.text === "Val");

};

testReturnNotesText();
