//1. Вивод парних чисел

const value = prompt('Введіть цифрове значення');

if (isNaN(value)) {
    console.log('Помилка: введіть число')
} else if (!isNaN(value)) {
    for (let i = 0; i < value; i += 2) {
        console.log(i);
    }
}

//2. Задача на розворот числа:

const currentMaxValue = 4589;
let reverseMaxValue;

reverseMaxValue = currentMaxValue.toString().split("").reverse().join("").toString();
reverseMaxValue = parseInt(reverseMaxValue);


console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'

//3. Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності:

const resultsArray = [1, 2, [3, [4]]];
let productOfArray; // [1, 2, 3, 4]
let result = 1;

productOfArray = resultsArray.flat(Infinity);
console.log(productOfArray)
for (let index = 1; index < productOfArray.length; index++) {
    result *= productOfArray[index];
}

console.log(result); // 24