let time = 23;

if (time >= 0 && time <= 14) {
  console.log('Перша чверть');
} else if (time >= 15 && time <= 29) {
  console.log('Друга чверть');
} else if (time >= 30 && time <= 44) {
  console.log('Третя чверть');
} else if (time >= 45 && time <= 59) {
  console.log('Четверта чверть');
} else {
  console.log('Невірне значення');
}
