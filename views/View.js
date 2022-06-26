const { commandList } = require("../controllers/Controller");
const Command = require("../models/Command");

class View {
    static helpCommand() {
        console.log("Command_list:")
        console.log("node todo.js help");
        console.log("node todo.js add <task>");
        console.log("node todo.js update <id> <task>");
        console.log("node todo.js delete <id>");
        console.log("node todo.js complete <id>");
        console.log("node todo.js uncomplete <id></id>");

    }
    static listCommand(data){
       console.log("commands list");
       data.forEach(commandList => {
        const { id, task } = commandList
        console.log(`${id}. ${task}`)
        }
    }
}

module.exports = View;