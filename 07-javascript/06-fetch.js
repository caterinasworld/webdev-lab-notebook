const url = 'https://anapioficeandfire.com/api/books/';

const app = document.querySelector('#books');

function fetchData(url) {
  fetch(url)
    .then(response => response.json())
    .then(books => {
      const loader = document.querySelector('#loading');
      if (loader) {
        loader.remove();
      }

      books.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.className = 'mb-3 mx-auto';
        bookElement.style.maxWidth = '500px';

        bookElement.innerHTML = `
          <div class="card-body">
            <h4 class="card-title">${book.name}</h5>
            <p class="card-text">
              ${book.authors.join(', ')}<br>
              ${new Date(book.released).getFullYear()}<br>
              ${book.numberOfPages}
            </p>
          </div>
        `;

        app.appendChild(bookElement);
      });
    })
    .catch(error => {
      console.error('Error fetching books:', error);
      app.innerHTML = '<p class="text-danger">Error loading books</p>';
    });
}

fetchData(url);