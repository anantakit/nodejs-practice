const yargs = require('yargs')
const notes = require('./notes.js')

// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demand: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demand: true,
            type: 'string'
        }
    },
    handler(argv) {
        console.log(argv)
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'Remove note',
            demand: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'list notes',
    handler() {
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'read notes',
    builder: {
        title: {
            describe: 'Read Title',
            demand: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()