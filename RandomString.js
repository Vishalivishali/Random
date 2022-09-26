function getRandomBetween(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
function getRandomString(length) {
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i ++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
function getRandomHexa() {
    return getRandomBetween(2,12).toString(16);
}

function getRandomCharacters() {
    return String.fromCharCode(getRandomBetween(65,90));
}

function main() {
console.log({randomBetween:getRandomBetween(2,12)});
console.log({randomString:getRandomString(10)});
console.log({randomCharacters:getRandomCharacters()});
}
main();
exports.getRandomString = getRandomString;
exports.getRandomHexa = getRandomHexa;