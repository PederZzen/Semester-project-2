export const token = localStorage.getItem("accessToken");
export const credits = localStorage.getItem("credits");
export const username = localStorage.getItem("username");

export const listingsFlag = `?sort=created&sortOrder=desc&_seller=true&_bids=true&_active=true`

export const API_BASE_URL = "https://nf-api.onrender.com/api/v1/auction";
export const listingsUrl = `${API_BASE_URL}/listings/`;
export const allEntriesUrl = `${API_BASE_URL}/listings${listingsFlag}`;
export const registerUrl = `${API_BASE_URL}/auth/register`;
export const loginUrl = `${API_BASE_URL}/auth/login`;
export const profileUrl = `${API_BASE_URL}/profiles/${username}`;
