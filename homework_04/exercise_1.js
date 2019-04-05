const os = require('os')

function checkSystem() {
    console.log(`Checking your system...`)
    const tatalMem = os.totalmem()
    const cpuCount = os.cpus().length
    if (tatalMem < 4000000000) {
        console.log(`This app needs at least 4GB`)
    } else if(cpuCount < 2) {
        console.log(`Processor is not supported`)
    } else {
        console.log(`System is ckeched successfully : ${tatalMem} and ${cpuCount} `)
    }
}

checkSystem()