
// API key for News API
const apiKey = '537cbe11ca604f30b4debda136041914';

// Get the news container element
const newsContainer = document.getElementById('news-container');

/**
 * Fetch news articles from News API
 * @param {string} category - Category of news to fetch (e.g. "general", "sports", etc.)
 */
async function fetchNews(category) {
    try {
        // Construct the API URL with the category and API key
        const url = `https://newsapi.org/v2/top-headlines?q=${category}&sortBy=popularity&apiKey=${apiKey}`;
        // Fetch the data from the API
        const response = await fetch(url);
        // Parse the response as JSON
        const data = await response.json();
        // Check if the API returned any articles
        if (!data.articles) {
            throw new Error('No articles found');
        }
        // Display the news articles
        displayNews(data.articles);
    } catch (error) {
        // Log any errors to the console
        console.error('Error fetching news:', error);
    }
}

/**
 * Display news articles in the news container
 * @param {array} articles - Array of news article objects
 */
function displayNews(articles) {
    // Clear the news container
    newsContainer.innerHTML = '';
    // Loop through each article and create a news card
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
        // Add the news card to the news container
        newsContainer.appendChild(newsCard);
    });
}

// Add event listeners to category links
document.addEventListener('DOMContentLoaded', () => {
    const categoryLinks = document.querySelectorAll('.category-link');
    categoryLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            const category = e.target.getAttribute('data-category');
            fetchNews(category);
        });
    });
    // Fetch general news by default
    fetchNews('general');
});