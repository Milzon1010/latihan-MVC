const View = require('../views/View')
const Command = require('../models/Command')

class Controller {
    static helpCommand(){
        View.helpCommand()

    }
    static listCommand(tambah){
        Command.listCommand(tambah)
    }
    static addCommand(tambah){
        Command.addCommand(tambah)
    }
    static updateCommand(tambah){
        Command.updateCommand(tambah)
    }
    static deleteCommand(tambah){
        let result = Command.deleteCommand(tambah)
        View.deleteCommand(result)
    }
    static completedCommand(tambah){
        let result = Command.completedCommand(tambah)
        View.completedCommand(result)
    }
    static uncompletedCommand(msg){
        View.message(msg)
        // console.log(msg)
    }
}

module.exports = Controller;