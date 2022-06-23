class View {
    static helpCommand(data) {
        console.log("Command_list:")
        // node todo.js help
        // node todo.js list  
        // node todo.js add <task>
        // node todo.js update <id> <task>
        // node todo.js delete <id>
        // node todo.js complete <id>
        // node todo.js uncomplete <id></id>
        console.log("node todo.js help");
        console.log("node todo.js add <task>");
        console.log("node todo.js update <id> <task>");
        console.log("node todo.js delete <id>");
        console.log("node todo.js complete <id>");
        console.log("node todo.js uncomplete <id></id>");

}
}

module.exports = View;