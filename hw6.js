// Конкатенація рядків
let film = "Інтерстеллар";
let genre = "наукова фантастика";
let year = 2014;

let message = film + " - " + genre + " (" + year + ")";
console.log(message);

let newMessage = `${film} - ${genre} (${year})`;
console.log(newMessage);

// Робота з екрануванням символів
let expression = "Краще 'запалити' свічку,\nніж 'проклинати' темряву";
console.log(expression);

// Пошук у рядку
let verse = "Світло кінця тунелю, а за спиною лише темрява";
let positionLight = verse.indexOf("світло");
let positionNight = verse.indexOf("темрява");
let firstLight = verse.startsWith("світло");
let lastLight = verse.endsWith("світло");
console.log("Позиція слова 'світло':", positionLight);
console.log("Позиція слова 'темрява':", positionNight);
console.log("Слово 'світло' на початку рядка:", firstLight);
console.log("Слово 'світло' на кінці рядка:", lastLight);

// Зміна регістру та заміна
let phrase = "Сонце світить яскраво";
let lowercasePhrase = phrase.toLowerCase();
let newPhrase = lowercasePhrase.replace("сонце", "місяць");
console.log(newPhrase);
