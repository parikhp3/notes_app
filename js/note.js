const noteForm = document.getElementById('note-form')
if (noteForm) {
    noteForm.addEventListener('submit', addNode);
}

function NoteData(note) {
    this.note = note;
}

function addNode(e) {
    e.preventDefault();

    const note = document.getElementById('inputbox').value;
    
    const noteData = new NoteData(note);
    console.log(noteData);
}