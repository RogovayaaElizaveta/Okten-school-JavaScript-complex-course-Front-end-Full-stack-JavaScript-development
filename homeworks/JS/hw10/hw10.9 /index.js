const priceBox = document.getElementById('priceBox');
    const now = Date.now();

    // Отримуємо попередні значення з localStorage
    let lastUpdate = localStorage.getItem('lastUpdate');
    let currentPrice = localStorage.getItem('price');

    if (!currentPrice) {
      // Якщо немає значення в localStorage – встановити початкову ціну
      currentPrice = 100;
    } else {
      currentPrice = parseInt(currentPrice);
    }

    if (!lastUpdate) {
      // Якщо немає дати – оновити на поточний момент
      lastUpdate = now;
      localStorage.setItem('lastUpdate', now);
    } else {
      // Перевірка, чи пройшло 10 секунд
      if (now - parseInt(lastUpdate) >= 10000) {
        currentPrice += 10;
        localStorage.setItem('price', currentPrice);
        localStorage.setItem('lastUpdate', now);
      }
    }

    // Вивід ціни на сторінку
    priceBox.innerText = `Ціна: ${currentPrice}грн`;