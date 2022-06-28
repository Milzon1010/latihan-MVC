const fs = require('fs');

class Command {
    constructor(id, task, status, created_at, completed_at ){
        this.id = id || 0
        this.task = task || ""
        this.status = status || ""
        this.created_at = created_at || 0
        this.completed_at = completed_at || 0
    }
    static listCommand(tambah) {
        let commands = JSON.parse(fs.readFileSync('./data.json', 'utf8'))
        console.log(commands);

        }
    }

    static addCommand(tambah) {
        let commands = this.getCommand()
        let lastIndex = commands.length - 1;
        let id = commands[lastIndex].id + 1;

        const [task, status, created_at, completed_at] = tambah
        let newCommand = new Command(id, task, status, hours(created_at), hours(completed_at))
        commands.push(new command);

        this.save(commands)
        console.log(`Command '${name}' has been create!.`)
    }

}

module.exports = Command