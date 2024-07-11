// API key for News API
const apiKey = '537cbe11ca604f30b4debda136041914';

// Get the news container element
const newsContainer = document.getElementById('news-container');

/**
 * Fetch news articles from News API
 * @param {string} category - Category of news to fetch (e.g. "general", "sports", etc.)
 */
async function fetchNews(category) {
    if (!category || category.trim() === '') {
        newsContainer.innerHTML = `<p>Please select a valid category.</p>`;
        return;
    }
    try {
        // Construct the API URL with the category and API key
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
        // Fetch the data from the API
        const response = await fetch(url);
        if (!response.ok) {
            if (response.status === 426) {
                throw new Error('The server refuses to perform the requested operation. Please check the API documentation and configuration.');
            } else if (response.status === 404) {
                throw new Error('Resource not found. Please check the API URL and try again.');
            } else {
                throw new Error(`Error fetching news: ${response.statusText}`);
            }
        }
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
        // Display an error message to the user
        newsContainer.innerHTML = `<p>Error: ${error.message}</p>`;
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
            if (category && category.trim() !== '') {
                fetchNews(category);
            } else {
                console.error('Category is null or undefined');
            }
        });
    });
    // Fetch general news by default
    fetchNews('general');

    // Check for third-party cookie warning
    if (navigator.userAgent.includes('Chrome')) {
        console.warn('Third-party cookies will be blocked in future Chrome versions as part of Privacy Sandbox.');
    }
});