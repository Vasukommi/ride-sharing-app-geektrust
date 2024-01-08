const fs = require("fs");

/**
 * Root of the project.
 * @param {string} filename - Input file name
 * Execute the function to start App
 */

const executeInputFile = (filename) => {
    const inputContent = fs.readFileSync(filename, 'utf-8');
    const inputCommands = inputContent.toString().split("\n");

    const commandIndex = 0;
    const indexOne = 1;
    const indexTwo = 2;
    const indexThree = 3;

    const commandTypes = {
        ADD_DRIVER: 'ADD_DRIVER',
        ADD_RIDER: 'ADD_RIDER',
        MATCH: 'MATCH',
        START_RIDE: 'START_RIDE',
        STOP_RIDE: 'STOP_RIDE',
        BILL: 'BILL'
    };

    for (let eachCommand of inputCommands) {
        const commandsArray = eachCommand.split(/\s+/).map((line) => line.trim());
        const command = commandsArray[commandIndex];
        const id = commandsArray[indexOne];

        switch (command) {
            case commandTypes.ADD_DRIVER:
                const driverPositionX = parseFloat(commandsArray[indexTwo]);
                const driverPositionY = parseFloat(commandsArray[indexThree]);
                console.log(driverPositionX, driverPositionY);
                break;
            case commandTypes.ADD_RIDER:
                const riderPositionX = parseFloat(commandsArray[indexTwo]);
                const riderPositionY = parseFloat(commandsArray[indexThree]);
                console.log(riderPositionX, riderPositionY);
                break;
            case commandTypes.MATCH:
                console.log(id);
                break;
            case commandTypes.START_RIDE:
                const driverN = parseInt(commandsArray[indexTwo]);
                const riderId = commandsArray[indexThree];
                console.log(driverN, riderId);
                break;
            case commandTypes.BILL:
                console.log(id);
                break;
            default:
                console.log('default', command, id);
                break;
        }
    }
};

const filename = process.argv[2];

executeInputFile(filename);