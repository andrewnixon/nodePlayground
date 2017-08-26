const fs = require('fs'); //File system module

var FILE_NAME = 'notes-data.json'

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync(FILE_NAME);
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
}

var saveNotes = (notes) => {
    fs.writeFileSync(FILE_NAME, JSON.stringify(notes));
}

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    return fetchNotes();
};

var readNote = (title) => {        
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title);

    return filteredNotes[0];
};

var removeNote = (title) => {
    var notes = fetchNotes();
    var newNotes = notes.filter((note) => note.title !== title);
    saveNotes(newNotes);

    return notes.length !== newNotes.length;
};

var logNote = (note) => {
    debugger;
    console.log(`Title: ${note.title}`);
    console.log('------------');
    console.log(note.body);
}

module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote,
    logNote
};