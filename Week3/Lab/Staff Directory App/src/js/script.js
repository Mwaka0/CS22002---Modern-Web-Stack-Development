fetch('https://dummyjson.com/users')
    .then(response => response.json())
    .then(data => {
        const staffList = document.getElementById('staffList'); 
        data.users.forEach(user => {
            const staffCard = document.createElement('div');
            staffCard.innerHTML = `
                <h2>${user.firstName} ${user.lastName}</h2> 
                <a href="details.html?id=${user.id}">View Details</a>   
            `;
            staffList.appendChild(staffCard);
        });
        console.log('Response:', data);
    })
    .catch(error => console.error('Error:', error));