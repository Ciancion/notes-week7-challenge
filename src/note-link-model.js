
function makeUrlChangeShowNoteForCurrentPage() {
  window.addEventListener("hashchange", showNoteForCurrentPage);
};

function showNoteForCurrentPage() {
  showNote(getNoteIDFromUrl(window.location));

};

function getNoteIDFromUrl(location) {
  return location.hash.split("#")[1];
};

function showNote(noteID) {
  var singleView = new SingleView(controller.list.notes[noteID])
  document
  .getElementById("app")
  .innerHTML = singleView.returnSingleNoteText();
};

function listenToSubmit(){
  document.getElementById("text").addEventListener("submit", function(evt){
    evt.preventDefault();
    controller.list.createAndAddNote(document.getElementById("note").value)
    controller.getList("app")

  })
}
