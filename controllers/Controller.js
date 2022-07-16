const View = require('../views/View');
const Command = require('../models/Command')

class Controller {
    static helpCommand(){
        View.helpCommand()

    }
    static listCommand() {
        let commandList = Command.listCommand()
        View.listCommand(commandList)
 
    }   
    static addCommand(tambah){
        Command.addCommand(tambah)
    }

}




module.exports = Controller;