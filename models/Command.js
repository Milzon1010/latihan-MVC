const fs = require('fs');
const { type } = require('os');

class Command {
    constructor(id, tasks, created_at, status, completed_at) {
        this.id = id;
        this.task = task;
    }
    static getCommands  () {
        let commands = JSON.parse(fs.readFileSync('./data.json', 'utf8'))
        commands = commands.map(commandList => {
            const { id, task } = commandList
   
        })
       return commands
    }
}

module.exports = Command;
