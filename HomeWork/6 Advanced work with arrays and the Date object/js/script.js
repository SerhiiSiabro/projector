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


//2. Задача на фільтрування масиву
//Реалізуйте фільтрування імен які починаються з голосної двома способами:
// 1. через умовну конструкцію всередині методу перебора
// 2. через вбудований метод масивів для фільтрації
//Рішення має працювати незалежно від конкретних значень в масиві імен

const userNamesSecondEx = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
let filteredNames = [];

// 1. через умовну конструкцію всередині методу перебора
userNamesSecondEx.forEach((element) => {
    let arrayFerstLetters = 
    if(element[0] === 'А' || element[0] === 'Е' || element[0] === 'Ю' || element[0] === 'І' || element[0] === 'Я' || element[0] === 'О') {
        console.log('Here', element[0]);
        filteredNames.push(element);
    } 
});

// 2. через вбудований метод масивів для фільтрації
// filteredNames = userNamesSecondEx.filter(element => element[0] === 'А' || element[0] === 'Е' || element[0] === 'Ю' || element[0] === 'І' || element[0] === 'Я' || element[0] === 'О');

console.log(filteredNames); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']