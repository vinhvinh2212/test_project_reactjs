import axios from 'configs/axios';
import CsrfService from './CsrfService';

/**
 * Send login information for authenticate
 */
const AuthService = {
	async login(formData) {
		await CsrfService.CreateCSRFCookie().then(() => {
			return axios.post("/login", formData);
		});
	},

	async logout() {
		await CsrfService.CreateCSRFCookie();
		
		axios.post("/logout").then(() => {
			sessionStorage.setItem("loggedIn", false);

			return true;
		}).catch((error) => {
			return false;
		});
	},

	getUserInfo() {
		return axios.get('/api/user');
	},

	isAuthenticated() {
		return sessionStorage.getItem('loggedIn') === 'true' || false;
	}
}

export default AuthService;