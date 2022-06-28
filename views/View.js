const fs = require('fs');

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
    static listCommand(commands) {
        console.log("Command List:")
    
        }
    }




module.exports = View;