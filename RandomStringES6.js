const {range} = require('@laufire/utils/collection');

const getRandomNum = () => Math.floor(Math.random() * 10);
console.log(getRandomNum());

const getRandomBetween = (min=0,max=12) => Math.floor(Math.random() * (max - min + 1) + min);
console.log(getRandomBetween(13,16));

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const generateString = (length) => {
    const charactersLength = characters.length;
    const result = range(0,length).reduce((prevValue) =>
     prevValue + characters.charAt(getRandomBetween(0,charactersLength)),"");
return result;
}
console.log(generateString(6));