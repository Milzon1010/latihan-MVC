const fs = require('fs');

class Command {
    constructor(id, task, status, created_at, completed_at ){
        this.id = id;
        this.task = task;
        this.status = status;
        this.created_at = created_at;
        this.completed_at = completed_at;
    }
    static helpCommand(){
        
        }

    static listCommand() {
        let commandList = JSON.parse(fs.readFileSync('./data.json', 'utf8'))
        console.log(commandList);     
        }  

}

module.exports = Command