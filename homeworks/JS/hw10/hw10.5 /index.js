  
    function getSessionsFullList() {
      const sessions = localStorage.getItem('sessionsList');
      return sessions ? JSON.parse(sessions) : [];
    }

  
    function saveSessionsFullList(list) {
      localStorage.setItem('sessionsList', JSON.stringify(list));
    }


    window.onload = function() {
      const sessionsList = getSessionsFullList();
      const now = new Date().toLocaleString();
      sessionsList.push(now);
      saveSessionsFullList(sessionsList);
    };