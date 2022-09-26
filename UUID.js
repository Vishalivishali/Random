const file = require('./RandomString.js');
function getRandomHexaValues(length) {
    let result = '';
    for(var i = 0; i < length; i++) {
        result += (`${file.getRandomHexa()}`);
    }
    return result;
}
function getUUID() {
    const partLengths = [8,4,4,4,12];
    const result = partLengths.map((partLength)=>getRandomHexaValues(partLength)).join("-");
    return result;
}
console.log(getRandomHexaValues());
console.log(getUUID());