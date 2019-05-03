const fs = require('fs'); //File system module
const _ = require('lodash'); //lodash package
const yargs = require('yargs');
const chalk = require('chalk');

const notes = require('./notes.js');

//customise yargs version
yargs.version('1.1.0');

const titleOptions = {
    describe: 'Title of the note',
    demand: true,
    alias: 't'
 };

const bodyOptions = {
    describe: 'Body of the note',
    demand: true,
    alias: 'b'
 };

const argv = yargs
    .command('add', 'Adds a note.', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all the notes.')
    .command('read', 'Read an individual note.',{title: titleOptions})
    .command('remove', 'Remove an individual note.',{title: titleOptions})
    .help()
    .argv;
var command = argv._[0];

if (command === 'add'){
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        notes.logNote(note);
    } else {
        console.log('Duplicate note...');
    }

} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);

    allNotes.forEach((note) => notes.logNote(note));

}  else if (command === 'read') {
    var note = notes.readNote(argv.title);

    if (note){
        notes.logNote(note);
    } else {
        console.log(`A note with title ${argv.title} has not been found`);
    }

} else if (command === 'remove') {
    var status = notes.removeNote(argv.title);
    var message = status ? 'Note removed.' : 'Note not removed, does it exist?';

    console.log(message);

} else {
    console.log("Command not recongnised.");
}
