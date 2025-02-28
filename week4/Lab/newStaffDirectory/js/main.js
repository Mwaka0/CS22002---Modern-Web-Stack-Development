import { fetchUsers } from "./apiService.js";
import { createUserCard, searchUsers, displayUsers } from "./index.js";

// Define a variable to store the users
let cachedUsers = [];

const DEFINE_AMOUNT = 20;

async function initialize() {
    // Event listener for the search input
    document.getElementById("searchInput").addEventListener("input", (e) => {
        searchUsers(e.target.value, cachedUsers);
    });

    if (localStorage.getItem('users')) {
        cachedUsers = JSON.parse(localStorage.getItem('users'));
        displayUsers(cachedUsers);
    }
    else {
        cachedUsers = await fetchUsers(DEFINE_AMOUNT);
    }
}

initialize();
