

//3. Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності

//Для рішення задачі необхідно використовувати тільки методи масивів!

const resultsArray = [1, 2, [3, [4]]];
let productOfArray;

// тут ваш код...

console.log(productOfArray); // 24

// 4. Задача про перетворення об'єкту
//Допустимо у вас є об'єкт, у якому кожен ключ - це назва товару (одинм словом), а значення - його ціна.
//Напишіть функцію яка буде всі ключі переводити у нижній регістр, а всі ціни буде заокруглювати до двох знаків після коми.

// приклад об'єкту
const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584',
    };
    
    function optimizer(data) {
        // тут ваш код
    };
    
    let updatedPriceData = optimizer(priceData);
    
    console.log(updatedPriceData) // {apples: '23.40', bananas: '48.00', oranges: '48.76'}

//Для рішення задачі необхідно використовувати методи масивів та Object.entries/Object.fromEnties методи


//5. Задача про обчислення різниці часу

//Напишіть функцію яка буде буде приймати 3 параметри
//— початкову дату (string)
//— кінцеву дату (string)
//— розмірність ('days',  'hours', 'minutes', seconds)
//Функція повертатиме часовий період між цими датами згідно розмірності.
//Також вкажіть значення по замовчуванню для всіх цих параметрів (на ваш вибір).
//Функція має коректно працювати навіть якщо початкова дата пізніше ніж кінцева дата.

durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds'); // поверне '86400 seconds'
durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days'); // поверне '362 days'