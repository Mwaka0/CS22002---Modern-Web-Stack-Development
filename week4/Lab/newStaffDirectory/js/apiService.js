/**
 * A function that fetches users from the randomuser.me API
 * @param {int} amount 
 */
export async function fetchUsers(amount) {
    //check if amount is an integer
    if (!Number.isInteger(amount)) {
        console.log('Amount must be an integer');
        throw new Error('Amount must be an integer');   
    }

    // Fetch users from the randomuser.me API
    const response = await fetch(`https://randomuser.me/api/?results=${amount}`);
    const data = await response.json();

    // store results in local storage
    localStorage.setItem('users', JSON.stringify(data.results));
    return data.results;
}
