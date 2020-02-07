/* var obj = {
    name: 'Andrew'
};

var stringObj = JSON.stringify(obj);

console.log(typeof stringObj);
console.log(stringObj);

var personString = '{"name":"andrew", "age":32}';
var personObj = JSON.parse(personString);

console.log(typeof personObj);
console.log(personObj.name);
console.log(personObj.age); */

const fs = require('fs') // File system module

var originalNote = {
  title: 'some title',
  body: 'Some body'
}

var originalNoteString = JSON.stringify(originalNote)
fs.writeFileSync('notes.json', originalNoteString)

var noteString = fs.readFileSync('notes.json')
var note = JSON.parse(noteString)
console.log(note)
console.log(typeof note)
