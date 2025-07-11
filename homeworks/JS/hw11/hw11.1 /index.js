const cartsDiv = document.getElementById('carts');

    function showObject(obj) {
      let html = '<ul>';
      for (let key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          html += `<li><strong>${key}:</strong> ${showObject(obj[key])}</li>`;
        } else {
          html += `<li><strong>${key}:</strong> ${obj[key]}</li>`;
        }
      }
      html += '</ul>';
      return html;
    }

    fetch('https://dummyjson.com/carts')
      .then(response => response.json())
      .then(data => {
        data.carts.forEach(cart => {
          const cartDiv = document.createElement('div');
          cartDiv.style.border = '1px solid black';
          cartDiv.style.margin = '10px';
          cartDiv.style.padding = '10px';

          cartDiv.innerHTML = showObject(cart);
          cartsDiv.appendChild(cartDiv);
        });
      })
      .catch(error => {
        cartsDiv.innerText = 'Помилка при завантаженні корзин';
        console.error(error);
      });