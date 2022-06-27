const View = require('../views/View')
const Command = require('../models/Command')

class Controller {
    static helpCommand(){
        View.helpCommand()

    }
    static listCommand() {
        let commandList = Command.listCommand()
        View.listCommand(commandList)
 
    }   
    static addItem(){
        View.addItem()

    }
    static updateItem(){
        View.updateItem()

    }
    static deleteItem(){
        View.deleteItem()

    }
    static completeItem(){
        View.completeItem()

    }
    static uncompleteItem(){
        View.uncompleteItem()

    }
    static message(msg){
        // console.log(msg)
        View.message(msg)
    }
}


module.exports = Controller;