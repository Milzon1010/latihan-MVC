const fs = require('fs');

class Command {
    constructor(id, task, status, created_at, completed_at ){
        this.id = id || 0
        this.task = task || ""
        this.status = status || ""
        this.created_at = created_at || 0
        this.completed_at = completed_at || 0
    }

}

let commands = JSON.parse(fs.readfilesync('./data.json', 'utf8'))
console.log(commands);


let commands =JSON.parse(fs.readFileSync('./data.json', 'utf8'))
console.log(commands)

module.exports = Command;