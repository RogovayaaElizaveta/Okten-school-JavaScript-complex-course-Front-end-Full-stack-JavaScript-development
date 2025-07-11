function getSessionsList() {
      const sessions = localStorage.getItem('sessionsList');
      return sessions ? JSON.parse(sessions) : [];
    }

    function renderSessions() {
      const sessionsList = getSessionsList();
      const ul = document.getElementById('sessions-list');
      ul.innerHTML = ''; 

      sessionsList.forEach((session, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${session}`;
        ul.appendChild(li);
      });
    }

    window.onload = renderSessions;