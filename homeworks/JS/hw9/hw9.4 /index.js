 let coursesAndDurationArray = [
      {title: 'JavaScript Complex', monthDuration: 5},
      {title: 'Java Complex', monthDuration: 6},
      {title: 'Python Complex', monthDuration: 6},
      {title: 'QA Complex', monthDuration: 4},
      {title: 'FullStack', monthDuration: 7},
      {title: 'Frontend', monthDuration: 4}
    ];

    for (const course of coursesAndDurationArray) {
      const div = document.createElement('div');
      div.classList.add('item');

      const h1 = document.createElement('h1');
      h1.classList.add('heading');
      h1.innerText = course.title;
      const p = document.createElement('p');
      p.classList.add('description');
      p.innerText = `Duration: ${course.monthDuration} months`;
      div.appendChild(h1);
      div.appendChild(p);

      document.body.appendChild(div);
    }