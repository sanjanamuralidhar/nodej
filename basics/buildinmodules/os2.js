const os=require("os")
var totmem=os.totalmem();
var freemem=os.freemem();
console.log(`totalmemory ${totmem}`);
console.log(`freememory ${freemem}`);