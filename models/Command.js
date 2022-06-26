const fs = require('fs');

class Command {
    constructor(id, tasks) {
        this.id = id;
        this.task = task;
    }
    static getItems  () {
        let commandList = JSON.parse(fs.readFileSync('./data.json', 'utf8'))
        commandList = Command;


    }
}

module.exports = Command;
