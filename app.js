//user input using yargs package
const yargs = require('yargs')
const notes = require('./notes.js')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: 'true',
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: 'true',
            type: 'string'
        }
    },
    handler: function (argv) {
        // console.log('Adding a new note!')
        // console.log('Title :' + argv.title)
        // console.log('Body :' + argv.body)
        notes.addNote(argv.title,argv.body)
    }

})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'title',
            demandOption: 'true',
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Removing the note')
        notes.removeNote(argv.title)
    }
       
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function () {
        notes.listNotes()
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a note')
    }
})
console.log(yargs.argv)