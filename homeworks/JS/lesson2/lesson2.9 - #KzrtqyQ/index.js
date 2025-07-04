let dayNumber = +prompt('Введіть номер дня тижня (1-7):');

switch (dayNumber) {
  case 1:
    console.log('Monday - English class');
    break;
  case 2:
    console.log('Tuesday - Math');
    break;
  case 3:
    console.log('Wednesday - PE');
    break;
  case 4:
    console.log('Thursday - History');
    break;
  case 5:
    console.log('Friday - Programming');
    break;
  case 6:
    console.log('Saturday - Day off');
    break;
  case 7:
    console.log('Sunday - Day off');
    break;
  default:
    console.log('Неправильний номер дня');
}
