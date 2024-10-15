const yourLanguage = prompt("Укажи свой язык в формате ru, en, de, fr, ha, zh").toLowerCase();

switch (yourLanguage) {
    case 'en':
        console.log ('Hello, good day!');
        break;
    case 'de':
        console.log ('Hallo, haben Sie einen guten Tag');
        break;
    case 'fr':
        console.log ('Bonjour, bonne journée');
        break;
    case 'ha':
        console.log('Sannu, a yini mai kyau');
        break;
    case 'zh':
        console.log('你好，祝你有美好的一天');
        break;
    default:
        console.log('Что-то на эльфийском');
}