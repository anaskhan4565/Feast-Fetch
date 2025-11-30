// API Configuration
// Set to 'local' for local development or 'production' for Azure deployment
const API_ENV = 'production';

const API_CONFIG = {
    local: 'http://localhost:7071/api',
    production: 'https://feastfetchfunctionappk224626-fjfadrgzcgfwcqev.centralindia-01.azurewebsites.net/api'
};

// Make API_BASE_URL available globally
window.API_BASE_URL = API_CONFIG[API_ENV] || API_CONFIG.production;
const API_BASE_URL = window.API_BASE_URL;

