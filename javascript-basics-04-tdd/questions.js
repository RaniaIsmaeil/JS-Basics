
const stringSize = (text) => {
  return text.length;
}
const replaceCharacterE = (text) => {
    let repl = text.replace("e", " ");
    return repl;
}
const concatString = (text1, text2) => {
    return text1.concat(text2);

}
const showChar5 = (text) => {
    return text.charAt(4);
}
const showChar9 = (text) => {
    // substring(indexStart, indexEnd)
    return text.substring(0,9);
}
const toCapitals = (text) => {
    return text.toUpperCase();
}
const toLowerCase = (text) => {
    return text.toLowerCase();
}
const removeSpaces = (text) => {
    return text.trim();
}
const IsString = (text) => {
    return (typeof text == "string"); 
}

const getExtension = (text) => {
    return text.split('.').pop();
}
const countSpaces = (text) => {
    return text.split(" ").length-1;
}
const InverseString = (text) => {
    const splitString = text.split("");
    const reverseArray = splitString.reverse();
    const joinArray = reverseArray.join("");
    return joinArray;
    // return InverseString.split("").reverse().join("");
}

const power = (x, y) => {
    return Math.pow(x,y);
}
const absoluteValue = (num) => {
    return Math.abs(num);
}
const absoluteValueArray = (array) => {
    const abs = array.map(Math.abs);
    return abs;
}
const circleSurface = (radius) => {
    return Math.round(Math.PI * (Math.pow(radius, 2)));
}
const hypothenuse = (ab, ac) => {
        var first   = ab ** 2;
        var second   = ac ** 2;
        var sum        = first + second;
        const hypothenuse = Math.sqrt(sum);
        return hypothenuse;
}
const BMI = (weight, height) => {
    const bmi   = weight / (height * height);
    const result = bmi.toFixed(2);
    return parseFloat(result) ;
}

const createLanguagesArray = () => {
    return ["Html","CSS","Java","PHP"];
}

const createNumbersArray = () => {
    var array =[0,1,2,3,4,5];
    return array;
}

const replaceElement = (languages) => {
    languages[2] = 'Javascript';
    return languages;
}

const addElement = (languages) => {
    languages.push('Ruby');
    languages.push('Python');
    return languages;
}

const addNumberElement = (numbers) => {
    numbers.unshift(-1);
    numbers.unshift(-2);
    return numbers;
}

const removeFirst = (languages) => {
    languages.shift();
    return languages;
}

const removeLast = (languages) => {
    languages.pop();
    return languages;
}

const convertStrToArr = (social_arr) => {
    var socialArray = social_arr.split(",");
    return socialArray;
}

const convertArrToStr = (languages) => {

    const arrToStr = languages.join(",");
    return arrToStr;

}

const sortArr = (social_arr) => {
    return social_arr.sort();
}

const invertArr = (social_arr) => {
    return social_arr.reverse();
}