const fs = require('fs');
const { type } = require('os');

class Command {
    constructor(id, task) {
        this.id = id;
        this.task = task;
   
    }
    static listCommand() {
        let commandList = JSON.parse(fs.readFileSync('./data.json', 'utf8'))
        commandList = commandList.map(command => {
            const { id, task } = command
       
        })
    }  

    
    
}
    module.exports  = Command;
