const command = process.argv[2];
const tambah = process.argv.slice(3)
const Controller = require('./controllers/Controller');



switch (command.toLowerCase()) {
    case 'help':
        Controller.helpCommand(tambah)
        break;
    case 'list':
        Controller.commandList(tambah)
        break;
    case 'add':
        Controller.addCommand(tambah)
        break;
    case 'update':
        Controller.updateCommand(tambah)
        break;
    case 'delete':
        Controller.deleteCommand(tambah)
        break;
    case 'completed':
        Controller.completedCommand(tambah)
        break;
    case 'uncompleted' :
        Controller.uncompletedCommand(tambah)
        break;
    default:
        Controller.message("Unknown Command!")
        break;
}