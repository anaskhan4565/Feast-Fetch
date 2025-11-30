/**
 * Admin Utilities
 * Provides helper functions for admin operations including secret key management
 */

const AdminUtils = {
    /**
     * Get the admin secret key from localStorage
     * @returns {string|null} The secret key or null if not found
     */
    getSecretKey: function() {
        // First try to get from dedicated storage
        let secretKey = localStorage.getItem('adminSecretKey');
        
        // If not found, try to get from currentUser object
        if (!secretKey) {
            const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
            if (currentUser && currentUser.secretKey) {
                secretKey = currentUser.secretKey;
                // Store it separately for easier access
                localStorage.setItem('adminSecretKey', secretKey);
            }
        }
        
        return secretKey;
    },

    /**
     * Check if user is authenticated as admin
     * @returns {boolean} True if user is admin
     */
    isAdmin: function() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
        return currentUser && currentUser.userType === 'Admin';
    },

    /**
     * Get current admin user data
     * @returns {object|null} Admin user object or null
     */
    getAdminUser: function() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
        if (currentUser && currentUser.userType === 'Admin') {
            return currentUser;
        }
        return null;
    },

    /**
     * Make an authenticated admin API call
     * @param {string} url - The API endpoint URL
     * @param {object} options - Fetch options (method, body, etc.)
     * @returns {Promise<Response>} The fetch response
     */
    adminApiCall: async function(url, options = {}) {
        const secretKey = this.getSecretKey();
        
        if (!secretKey) {
            throw new Error('Admin secret key not found. Please login again.');
        }

        // Set default headers with secret key
        const headers = {
            'x-admin-key': secretKey,
            ...options.headers
        };

        // Don't set Content-Type for FormData - browser will set it with boundary
        if (!(options.body instanceof FormData)) {
            headers['Content-Type'] = 'application/json';
        }

        // Log API call details (without exposing full secret key)
        console.log('Admin API Call:', {
            url: url,
            method: options.method || 'GET',
            hasSecretKey: !!secretKey,
            secretKeyPrefix: secretKey ? secretKey.substring(0, 8) + '...' : 'none',
            hasBody: !!options.body,
            bodyType: options.body instanceof FormData ? 'FormData' : typeof options.body
        });

        // Merge options
        const fetchOptions = {
            ...options,
            headers: headers
        };

        try {
            const response = await fetch(url, fetchOptions);
            console.log('Admin API Response:', {
                url: url,
                status: response.status,
                statusText: response.statusText
            });
            return response;
        } catch (error) {
            console.error('Admin API call error:', error);
            throw error;
        }
    },

    /**
     * Store admin data including secret key
     * @param {object} adminData - Admin data from login response
     * @param {string} secretKey - The secret key
     */
    storeAdminData: function(adminData, secretKey) {
        const adminUser = {
            id: adminData.id,
            email: adminData.email,
            name: adminData.name || 'Admin',
            userType: 'Admin',
            secretKey: secretKey
        };

        // Store in currentUser
        localStorage.setItem('currentUser', JSON.stringify(adminUser));
        
        // Store secret key separately for easy access
        localStorage.setItem('adminSecretKey', secretKey);
    },

    /**
     * Clear admin data (logout)
     */
    clearAdminData: function() {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('adminSecretKey');
    }
};

// Make it globally available
window.AdminUtils = AdminUtils;

