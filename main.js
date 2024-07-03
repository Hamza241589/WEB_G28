// Fake data example for market summary
const marketData = [
    { name: 'Bitcoin (BTC)', price: '$30,000', change: '+2%' },
    { name: 'Ethereum (ETH)', price: '$2,000', change: '+1.5%' },
    { name: 'Ripple (XRP)', price: '$0.60', change: '+3%' },
];

// Fake data example for trends analysis
const trendsData = [
    { name: 'Bitcoin (BTC)', trend: 'Bullish' },
    { name: 'Ethereum (ETH)', trend: 'Bearish' },
    { name: 'Ripple (XRP)', trend: 'Stable' },
];

// Fake data example for market sentiment
const sentimentData = [
    { name: 'Bitcoin (BTC)', sentiment: 'Positive' },
    { name: 'Ethereum (ETH)', sentiment: 'Neutral' },
    { name: 'Ripple (XRP)', sentiment: 'Negative' },
];

// Fake data example for custom alerts
const alertsData = [
    { alert: 'Bitcoin price dropped below $30,000' },
    { alert: 'Ethereum price increased by 5%' },
    { alert: 'Ripple price stable for 24 hours' },
];

// Fake data example for user profile
const profileData = {
    username: 'hamza245891',
    email: 'hamza.abu.nimer@e.braude.ac.il',
    preferences: {
        alerts: true,
        
    },
};

// Function to render market summary
function renderMarketSummary() {
    const marketSummaryElement = document.getElementById('market-summary');
    marketSummaryElement.innerHTML = marketData.map(coin => `
        <div class="bg-white p-4 rounded shadow">
            <h3 class="text-xl font-bold">${coin.name}</h3>
            <p>Price: ${coin.price}</p>
            <p>Change: ${coin.change}</p>
        </div>
    `).join('');
}

// Function to render trends analysis
function renderTrendsAnalysis() {
    const trendsElement = document.getElementById('trends-analysis');
    trendsElement.innerHTML = trendsData.map(coin => `
        <div class="bg-white p-4 rounded shadow">
            <h3 class="text-xl font-bold">${coin.name}</h3>
            <p>Trend: ${coin.trend}</p>
        </div>
    `).join('');
}

// Function to render market sentiment
function renderMarketSentiment() {
    const sentimentElement = document.getElementById('market-sentiment');
    sentimentElement.innerHTML = sentimentData.map(coin => `
        <div class="bg-white p-4 rounded shadow">
            <h3 class="text-xl font-bold">${coin.name}</h3>
            <p>Sentiment: ${coin.sentiment}</p>
        </div>
    `).join('');
}

// Function to render custom alerts
function renderCustomAlerts() {
    const alertsElement = document.getElementById('custom-alerts');
    alertsElement.innerHTML = alertsData.map(alert => `
        <div class="bg-white p-4 rounded shadow">
            <p>${alert.alert}</p>
        </div>
    `).join('');
}

// Function to render user profile
function renderUserProfile() {
    const profileElement = document.getElementById('user-profile');
    profileElement.innerHTML = `
        <div class="bg-white p-4 rounded shadow">
            <h3 class="text-xl font-bold">Username: ${profileData.username}</h3>
            <p>Email: ${profileData.email}</p>
            <p>Alerts: ${profileData.preferences.alerts ? 'Enabled' : 'Disabled'}</p>
            <p>Newsletter: ${profileData.preferences.newsletter ? 'Subscribed' : 'Unsubscribed'}</p>
        </div>
    `;
}

// Function to handle navigation
function handleNavigation() {
    const sections = document.querySelectorAll('.content-section');
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            sections.forEach(section => section.classList.add('hidden'));
            const targetSectionId = link.id.replace('-link', '');
            document.getElementById(targetSectionId).classList.remove('hidden');

            // Render content for the selected section
            switch (targetSectionId) {
                case 'home':
                    renderMarketSummary();
                    break;
                case 'trends':
                    renderTrendsAnalysis();
                    break;
                case 'sentiment':
                    renderMarketSentiment();
                    break;
                case 'alerts':
                    renderCustomAlerts();
                    break;
                case 'profile':
                    renderUserProfile();
                    break;
            }
        });
    });
}

// Initial rendering
renderMarketSummary();
handleNavigation();