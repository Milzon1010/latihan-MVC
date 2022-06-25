const View = require('../views/View')
const Command = require('../models/Command')

class Controller {
    static helpCommand(){
        View.helpCommand()

    }
    static listCommand(){
        View.listCommand()
 
    }   
}


module.exports = Controller;