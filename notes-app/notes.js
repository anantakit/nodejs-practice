const fs = require('fs')
const chalk = require('chalk')
const getNotes =  () => {
    return 'your notes'
}

const addNote =  (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.filter((note) => note.title === title)

    if (duplicateNote.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.greenBright.inverse('New note added'))
    }
    else {
        console.log(chalk.red.inverse('Note already taken'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesTokeep = notes.filter((note) => note.title !== title)

    if (notesTokeep.length === notes.length) {
        console.log(chalk.red.inverse('No note found!'))
    } else {
        saveNotes(notesTokeep)
        console.log(chalk.greenBright.inverse('Note removed!'))
    }
}

const listNotes = () => {
    console.log(chalk.green.inverse('Your notes'))
    const notes = loadNotes()
    notes.forEach(note => {
        console.log(note.title)
    });
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.blue.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('no note found!'))
    }
}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch (error) {
        return []
    }
}

module.exports = {
    getNotes,
    addNote,
    removeNote,
    listNotes,
    readNote
}