//1. Перевірка пароля
let password = '';

while (password.length !== 8 && password[0] !== isNaN()) {
    password = prompt('Введіть пароль(8 символіт та перший символ - цифра)');
    if (password.length === 8 && password[0] !== isNaN()) {
        console.log(true)
    } else {
        console.log(false)
    }
}

//2. Конвертер валют

{const rate = 36.87;
const uan = prompt('Введіть суму гривень для конвертації');
const result = uan / rate;
console.log(`${uan} UAN = ${result.toFixed(2)} USD`);}

//3. Обчислення вартості бензину

{const litrsOfPetrole = prompt('Введіть кількість літрів бензину, яку ви хочете купити');
const prisePerLitr = prompt('Введіть ціну за один літр');
const result = litrsOfPetrole * prisePerLitr;
console.log(`Вартість ${litrsOfPetrole} літрів бензину: ${result.toFixed(2)}грн.`)}
