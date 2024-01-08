const fs = require("fs")


/**
 * Root of the project.
 * @param {string} filename - Input file name
 * Execute the function to start App
 */

const executeInputFile = (filename) => {
    const inputContent = fs.readFileSync(filename, 'utf-8');
    const inputCommands = inputContent.toString().split("\n");

    const commandIndex = 0;
    const idIndex = 1;

    const defaultCommands = {
        ADD_DRIVER: 'ADD_DRIVER',
        ADD_RIDER: 'ADD_RIDER',
        MATCH: 'MATCH',
        START_RIDE: 'START_RIDE',
        STOP_RIDE: 'STOP_RIDE',
        BILL: 'BILL'
    };

    for (let eachCommand of inputCommands) {
        const commandsArray = eachCommand.split(' ').map((line) => line.trim());
        const command = commandsArray[commandIndex];
        const id = commandsArray[idIndex];

        switch (command) {
            case defaultCommands.ADD_DRIVER:
                console.log(id);
                break;
            case defaultCommands.ADD_RIDER:
                console.log(id);
                break
            case defaultCommands.MATCH:
                console.log(id);
                break
            case defaultCommands.START_RIDE:
                console.log(id);
                break
            case defaultCommands.BILL:
                console.log(id);
                break
            default:
                console.log('default', command, id)
                break;
        }
    }
};

const filename = process.argv[2];

executeInputFile(filename);