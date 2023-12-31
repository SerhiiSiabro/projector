// 1. Задача на повернення ініціалів для кожного імені з масиву, посортованих в алфавітному порядку
//Рішення має працювати незалежно від конкретних значень в масиві імен

// const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
// let sortedNames = userNames.sort();
// let initials = [];

// for (let i = 0; i < sortedNames.length; i++) {
//     const element = sortedNames[i];
//     getInitialsOfOneName = element.split(" ").map(part => part[0]).join(".");
//     initials[i] = getInitialsOfOneName;
// }
// console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]


// 2. Задача на фільтрування масиву
// Реалізуйте фільтрування імен які починаються з голосної двома способами:
// 1. через умовну конструкцію всередині методу перебора
// 2. через вбудований метод масивів для фільтрації
// Рішення має працювати незалежно від конкретних значень в масиві імен

// const userNamesSecondEx = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
// let filteredNames = [];
// let vowelLetters = ['Е', 'А', 'Я', 'І', 'О', 'Ю'];

// // 1. через умовну конструкцію всередині методу перебора
// userNamesSecondEx.forEach((element) => {
//     if(vowelLetters.includes(element[0])) {
//         console.log('Here', element[0]);
//         filteredNames.push(element);
//     } 
// });

// // 2. через вбудований метод масивів для фільтрації
// filteredNames = userNamesSecondEx.filter(element => vowelLetters.includes(element[0], 0));

// console.log(filteredNames); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']


//3. Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності

//Для рішення задачі необхідно використовувати тільки методи масивів!

// const resultsArray = [1, 2, [3, [4]]];
// let productOfArray;

// productOfArray = resultsArray.flat(Infinity).reduce((accumulator, currentValue) => accumulator * currentValue, 1)

// console.log(productOfArray); // 24



// 4. Задача про перетворення об'єкту
//Допустимо у вас є об'єкт, у якому кожен ключ - це назва товару (одинм словом), а значення - його ціна.
//Напишіть функцію яка буде всі ключі переводити у нижній регістр, а всі ціни буде заокруглювати до двох знаків після коми.

// приклад об'єкту
// const priceData = {
//     Apples: '23.4',
//     BANANAS: '48',
//     oRAngGEs: '48.7584',
//     };
    
//     function optimizer(data) {
//         return Object.fromEntries(
//         Object.entries(data).map(([key, value]) => 
//             [key = key.toLowerCase(), value = Number.parseFloat(value).toFixed(2)]),
//         )
//     };
    
//     let updatedPriceData = optimizer(priceData);
    
//     console.log(updatedPriceData) // {apples: '23.40', bananas: '48.00', oranges: '48.76'}

//Для рішення задачі необхідно використовувати методи масивів та Object.entries/Object.fromEnties методи



//5. Задача про обчислення різниці часу

//Напишіть функцію яка буде буде приймати 3 параметри
//— початкову дату (string)
//— кінцеву дату (string)
//— розмірність ('days',  'hours', 'minutes', seconds)
//Функція повертатиме часовий період між цими датами згідно розмірності.
//Також вкажіть значення по замовчуванню для всіх цих параметрів (на ваш вибір).
//Функція має коректно працювати навіть якщо початкова дата пізніше ніж кінцева дата.

function durationBetweenDates(startDate = Date.now(), endDate = Date.now(), dimension = 'days') {

    let difference = Math.abs(new Date(endDate) - new Date(startDate));
    
    switch(dimension) {
        case 'seconds':
            return `${difference / 1000} ${dimension}`;
        case 'minutes':
            return `${difference / (1000 * 60)} ${dimension}`;
        case 'hours':
            return `${difference / (1000 * 60 * 60)} ${dimension}`;
        case 'days':
            return `${difference / (1000 * 60 * 60 * 24)} ${dimension}`;
        default:
            console.log(`Sorry, we cant find ${dimension}`);
    }
}
console.log(durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds')); // поверне '86400 seconds'
console.log(durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days')); // поверне '362 days'
console.log(durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'minutes'));
console.log(durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'hours'));