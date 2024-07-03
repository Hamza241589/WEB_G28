
const marketData = [
    { name: 'Bitcoin (BTC)', price: '$30,000', change: '+2%', trend: [29000, 29500, 30000, 31000, 30500] },
    { name: 'Ethereum (ETH)', price: '$2,000', change: '+5%', trend: [1900, 1950, 2000, 2100, 2050] },
    { name: 'Ripple (XRP)', price: '$0.60', change: '+3%', trend: [0.55, 0.58, 0.60, 0.62, 0.61] },
    { name: 'Litecoin (LTC)', price: '$150', change: '+1.2%', trend: [140, 145, 150, 155, 150] },
    { name: 'Cardano (ADA)', price: '$1.20', change: '+2.5%', trend: [1.10, 1.15, 1.20, 1.25, 1.20] },
    { name: 'Polkadot (DOT)', price: '$25', change: '+4%', trend: [23, 24, 25, 26, 25] },
];


const trendsData = [
    { name: 'Bitcoin (BTC)', trend: 'Bullish' },
    { name: 'Ethereum (ETH)', trend: 'Bearish' },
    { name: 'Ripple (XRP)', trend: 'Stable' },
    { name: 'Litecoin (LTC)', trend: 'Bullish' },
    { name: 'Cardano (ADA)', trend: 'Stable' },
    { name: 'Polkadot (DOT)', trend: 'Bullish' },
];

const sentimentData = [
    { name: 'Bitcoin (BTC)', sentiment: 'Positive' },
    { name: 'Ethereum (ETH)', sentiment: 'Neutral' },
    { name: 'Ripple (XRP)', sentiment: 'Negative' },
    { name: 'Litecoin (LTC)', sentiment: 'Positive' },
    { name: 'Cardano (ADA)', sentiment: 'Neutral' },
    { name: 'Polkadot (DOT)', sentiment: 'Positive' },
];

const alertsData = [
    { alert: 'Bitcoin price dropped below $30,000' },
    { alert: 'Ethereum price increased by 5%' },
    { alert: 'Ripple price stable for 24 hours' },
    { alert: 'Litecoin price dropped below $150' },
    { alert: 'Cardano price increased by 10%' },
    { alert: 'Polkadot price stable for 48 hours' },
];

const profileData = {
    username: 'hamza245891',
    email: 'hamza.abu.nimer@e.braude.ac.il',
    preferences: {
        alerts: true,
        newsletter: false
    },
    customAlerts: [
        'Bitcoin price dropped below $30,000',
        'Ethereum price increased by 5%',
        'Ripple price stable for 24 hours',
        'Litecoin price dropped below $150',
        'Cardano price increased by 10%',
        'Polkadot price stable for 48 hours'
    ],
    stats: {
        trackedCoins: ['Bitcoin', 'Ethereum', 'Ripple', 'Litecoin', 'Cardano', 'Polkadot'],
        alertHistory: ['Bitcoin price dropped below $30,000', 'Ethereum price increased by 5%']
    }
};


function renderMarketSummary() {
    const marketSummaryElement = document.getElementById('market-summary');
    marketSummaryElement.innerHTML = marketData.map(coin => `
        <div class="bg-white p-4 rounded shadow">
            <h3 class="text-xl font-bold">${coin.name}</h3>
            <p>Price: ${coin.price}</p>
            <p>Change: ${coin.change}</p>
            <canvas id="${coin.name.replace(/\s+/g, '')}-chart" width="400" height="200"></canvas>
        </div>
    `).join('');

   
    marketData.forEach(coin => {
        const ctx = document.getElementById(`${coin.name.replace(/\s+/g, '')}-chart`).getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
                datasets: [{
                    label: `${coin.name} Price`,
                    data: coin.trend,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: false
                    }
                }
            }
        });
    });
}


function renderTrendsAnalysis() {
    const trendsElement = document.getElementById('trends-analysis');
    trendsElement.innerHTML = trendsData.map(coin => `
        <div class="bg-white p-4 rounded shadow">
            <h3 class="text-xl font-bold">${coin.name}</h3>
            <p>Trend: ${coin.trend}</p>
        </div>
    `).join('');
}


function renderMarketSentiment() {
    const sentimentElement = document.getElementById('market-sentiment');
    sentimentElement.innerHTML = sentimentData.map(coin => `
        <div class="bg-white p-4 rounded shadow">
            <h3 class="text-xl font-bold">${coin.name}</h3>
            <p>Sentiment: ${coin.sentiment}</p>
        </div>
    `).join('');
}


function renderCustomAlerts() {
    const alertsElement = document.getElementById('custom-alerts');
    alertsElement.innerHTML = alertsData.map(alert => `
        <div class="bg-white p-4 rounded shadow">
            <p>${alert.alert}</p>
        </div>
    `).join('');
}


function renderUserProfile() {
    const profileElement = document.getElementById('user-profile');
    profileElement.innerHTML = `
        <div class="bg-white p-4 rounded shadow">
            <h3 class="text-xl font-bold">Username: ${profileData.username}</h3>
            <p>Email: ${profileData.email}</p>
            <p>Alerts: ${profileData.preferences.alerts ? 'Enabled' : 'Disabled'}</p>
            <p>Newsletter: ${profileData.preferences.newsletter ? 'Subscribed' : 'Unsubscribed'}</p>
            <h4 class="text-lg font-bold mt-4">Custom Alerts</h4>
            <ul>
                ${profileData.customAlerts.map(alert => `<li>${alert}</li>`).join('')}
            </ul>
            <h4 class="text-lg font-bold mt-4">Statistics</h4>
            <p>Tracked Coins: ${profileData.stats.trackedCoins.join(', ')}</p>
            <p>Alert History: ${profileData.stats.alertHistory.join(', ')}</p>
            <h4 class="text-lg font-bold mt-4">Manage Preferences</h4>
            <button class="bg-blue-500 text-white p-2 rounded mt-2" onclick="toggleAlertPreference()">Toggle Alerts</button>
            <button class="bg-blue-500 text-white p-2 rounded mt-2" onclick="toggleNewsletterPreference()">Toggle Newsletter</button>
        </div>
    `;
}

function toggleAlertPreference() {
    profileData.preferences.alerts = !profileData.preferences.alerts;
    renderUserProfile();
}

function toggleNewsletterPreference() {
    profileData.preferences.newsletter = !profileData.preferences.newsletter;
    renderUserProfile();
}

function handleNavigation() {
    const sections = document.querySelectorAll('.content-section');
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            sections.forEach(section => section.classList.add('hidden'));
            const targetSectionId = link.id.replace('-link', '');
            document.getElementById(targetSectionId).classList.remove('hidden');

         
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

renderMarketSummary();
handleNavigation();