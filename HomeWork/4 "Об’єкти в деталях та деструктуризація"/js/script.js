// приклад об'єкту
const priceData = {
  Apples: '23.4',
  BANANAS: '48',
  oRAngGEs: '48.7584',
};

let updatedPriceData = {};

let entries = Object.entries(priceData);
for (let i = 0; i < entries.length; i++) {
  const element = entries[i];
  const chengedKeyElement = element[0].toLowerCase();
  const chengedValueElement = Number(element[1]).toFixed(2);
  entries[i] = [chengedKeyElement, chengedValueElement];
}
updatedPriceData = Object.fromEntries(entries);

console.log(updatedPriceData) // {apples: '23.40', bananas: '48.00', oranges: '48.76'}