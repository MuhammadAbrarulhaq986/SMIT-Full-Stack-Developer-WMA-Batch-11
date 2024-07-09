// // script.js
// const apiKey = '537cbe11ca604f30b4debda136041914';
// let newsContainer = null;
// // Initialize it here

// // Function to fetch news articles from NewsAPI
// async function fetchNews(category) {
//     try {
//         const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`);
//         const data = await response.json();
//         const articles = data.articles;
//         displayNews(articles);
//     } catch (error) {
//         console.error(error);
//     }
// }

// // Function to display news articles
// function displayNews(articles) {
//     newsContainer.innerHTML = ''; // Now this should work!
//     articles.forEach((article) => {
//         const newsCard = document.createElement('div');
//         newsCard.className = 'card mb-3';
//         newsCard.innerHTML = `
//       <img src="${article.urlToImage}" class="card-img-top" alt="${article.title}">
//       <div class="card-body">
//         <h5 class="card-title">${article.title}</h5>
//         <p class="card-text">${article.description}</p>
//         <a href="${article.url}" target="_blank" class="btn btn-primary">Read More</a>
//       </div>
//     `;
//         newsContainer.appendChild(newsCard);
//     });
// }


// document.addEventListener('DOMContentLoaded', () => {
//     newsContainer = document.getElementById('news-container');// Assign it here
//     const categoryLinks = document.querySelectorAll('.category-link');

//     categoryLinks.forEach((link) => {
//         link.addEventListener('click', (e) => {
//             const category = e.target.getAttribute('data-category');
//             fetchNews(category);
//         });
//     });

//     // Move the initial fetch inside the DOMContentLoaded event handler
//     newsContainer.innerHTML = ''; // Clear the container
//     function initNewsContainer() {
//         newsContainer = document.getElementById('news-container');
//         fetchNews('general'); // Initial fetch on page load
//     }

//     document.addEventListener('DOMContentLoaded', initNewsContainer);
// });


const apiKey = '537cbe11ca604f30b4debda136041914';
let newsContainer = null;

async function fetchNews(category) {
    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?q=${category}&sortBy=popularity&apiKey=${apiKey}`);
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        const articles = data.articles;
        console.log('Received articles:', articles);
        displayNews(articles);
    } catch (error) {
        console.error('Error fetching news:', error);
    }
}

function displayNews(articles) {
    newsContainer.innerHTML = '';
    console.log('Displaying news articles:', articles);
    articles.forEach((article) => {
        const newsCard = document.createElement('div');
        newsCard.className = 'card mb-3';
        newsCard.innerHTML = `
      <img src="${article.urlToImage}" class="card-img-top" alt="${article.title}">
      <div class="card-body">
        <h5 class="card-title">${article.title}</h5>
        <p class="card-text">${article.description}</p>
        <a href="${article.url}" target="_blank" class="btn btn-primary">Read More</a>
      </div>
    `;
        newsContainer.appendChild(newsCard);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    newsContainer = document.getElementById('news-container');
    const categoryLinks = document.querySelectorAll('.category-link');

    categoryLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            const category = e.target.getAttribute('data-category');
            fetchNews(category);
        });
    });

    fetchNews('general');
});