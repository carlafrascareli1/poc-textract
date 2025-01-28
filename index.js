const program = require("commander");
const fs = require("fs");
const textractAnalyse = require("./textract-analyse-document");
const textractDetect = require("./textract-detect-document");


process.__defineGetter__('stdout', function() { return fs.createWriteStream('/temp/node.access.log', {flags:'a'}) })

f = async function(){
var data = fs.readFileSync("/temp/IMG_20250122_110859.jpg");
//const results = await textractAnalyse(data);
const results = await textractDetect(data);


console.log('----------');
console.log(results);
return results;
}

f();    