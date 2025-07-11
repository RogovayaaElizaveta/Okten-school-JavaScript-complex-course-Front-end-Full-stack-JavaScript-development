const data = Array.from({ length: 100 }, (_, i) => ({
      id: i + 1,
      name: `Item ${i + 1}`
    }));

    const container = document.getElementById('container');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');

    let currentPage = 1;
    const itemsPerPage = 10;
    const totalPages = Math.ceil(data.length / itemsPerPage);

    function renderPage(page) {
      container.innerHTML = ''; 

      const start = (page - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      const pageItems = data.slice(start, end);

      pageItems.forEach(item => {
        const div = document.createElement('div');
        div.className = 'item';
        div.textContent = `${item.id}. ${item.name}`;
        container.appendChild(div);
      });


      prevBtn.disabled = currentPage === 1;
      nextBtn.disabled = currentPage === totalPages;
    }

    prevBtn.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        renderPage(currentPage);
      }
    });

    nextBtn.addEventListener('click', () => {
      if (currentPage < totalPages) {
        currentPage++;
        renderPage(currentPage);
      }
    });


    renderPage(currentPage);