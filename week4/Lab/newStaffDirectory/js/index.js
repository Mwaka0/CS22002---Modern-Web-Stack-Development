export function createUserCard(cachedUsers) {
    const card = document.createElement('div');
    card.className = 'col-md-4 mb-4'; 
    card.innerHTML = `
        <div class="card shadow-sm">
            <img src="${cachedUsers.picture.large}" class="card-img-top" alt="${cachedUsers.name.first}">
            <div class="card-body">
                <h5 class="card-title">${cachedUsers.name.first} ${cachedUsers.name.last}</h5>
                <p class="card-text">${cachedUsers.email}</p>
                <p class="card-text">${cachedUsers.phone}</p>
                <a href="profile.html?userID=${cachedUsers.login.uuid}" class="btn btn-primary">View Profile</a>
            </div>
        </div>
    `;
    return card;
}

export function displayUsers(users) {
    const resultsContainer = document.getElementById('userContainer');
    resultsContainer.innerHTML = ''; // Clear the results container
    
    users.forEach(user => {
        resultsContainer.appendChild(createUserCard(user));
    });
}

export function searchUsers(query, cachedUsers) {
    const filteredUsers = cachedUsers.filter(user => 
        user.name.first.toLowerCase().includes(query.toLowerCase()) ||
        user.name.last.toLowerCase().includes(query.toLowerCase())
    );
    displayUsers(filteredUsers);
}
