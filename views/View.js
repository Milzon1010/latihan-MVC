class View {
    static helpCommand(data) {
        console.log("Command_list:")
        data.forEach(command => {
            const { id, task, command } = command
            console.log(`${id}. ${task}, ${command}`)
        })
    }
    static group(tambah) {
        const [type, filteredData] = tambah
        console.log(type + " List : ")
        filteredData.forEach(command => {
            const { id, task, command } = command
            console.log(`${id}. ${task}, ${command}`)
        })
    }
    static find(tambah){
        // const {id, name, type, command, stock} = tambah
        console.table(tambah)
    }
    static message(msg) {
        console.log(msg)
    }
}
module.exports = View