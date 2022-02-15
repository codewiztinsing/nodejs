var fs = require("fs");
fs.writeFileSync("corn.txt","corn is good")



console.log(fs.readFileSync("corn.txt").toString())