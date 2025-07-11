const container = document.getElementById('recipes-container');

    fetch('https://dummyjson.com/recipes')
      .then(response => response.json())
      .then(data => {
        const recipes = data.recipes;
        recipes.forEach(recipe => {
          const div = document.createElement('div');
          div.className = 'recipe';


          const title1 = document.createElement('h2');
          title1.textContent = recipe.title;
          div.appendChild(title1);


          if(recipe.description) {
            const desc = document.createElement('p');
            desc.textContent = recipe.description;
            div.appendChild(desc);
          }


          const ingDiv = document.createElement('div');
          ingDiv.className = 'ingredients';
          const ingTitle = document.createElement('strong');
          ingTitle.textContent = 'Інгредієнти:';
          ingDiv.appendChild(ingTitle);

          const ul = document.createElement('ul');
          recipe.ingredients.forEach(ingredient => {
            const li = document.createElement('li');
            li.textContent = ingredient;
            ul.appendChild(li);
          });
          ingDiv.appendChild(ul);

          div.appendChild(ingDiv);
          container.appendChild(div);
        });
      })
      .catch(err => {
        container.textContent = 'Помилка при завантаженні рецептів.';
        console.error(err);
      });