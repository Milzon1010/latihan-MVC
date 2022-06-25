const fs = require('fs');

class Command {
    constructor(id, tasks, created_at, status, completed_at) {
        this.id = id;
        this.task = task;
        this.status = status;
        this.created_at = created_at;
        this.completed_at = completed_at;
    }

    static listCommand() {
        let commands = JSON.parse(fs.readFileSync('./data.json', 'utf8'))
        commands = commands.map(Command => {
            const { id, tasks, created_at, status, completed_at } = Command
            switch (type) {
                case 'help':
                    return new Command(id, tasks, created_at, status, completed_at) 
                    break;
                case 'list':
                    return new Command(id, tasks, created_at, status, completed_at)
                    break;
                case 'update':
                    return new Command(id, tasks, created_at, status, completed_at)
                    break;
                case 'delete':
                    return new Command(id, tasks, created_at, status, completed_at)
                    break;
                case 'completed':
                    return new Command(id, tasks, created_at, status, completed_at)
                    break;  
                case 'uncompleted':
                    return new Command(id, tasks, created_at, status, completed_at)
                    break;         

            }
        })
        return commands
    }
}

module.exports = Command;
