// Get the id from the URL
const params = new URLSearchParams(window.location.search); 
const userId = params.get('id');

// prototype for the function viewComments(postId) {} 
function viewComments(postId) {}

// Fetch the user details
fetch(`https://dummyjson.com/users/${userId}`)
    .then(response => response.json())
    .then(data => {
        const detailsDiv = document.getElementById('staffDetails');
        detailsDiv.innerHTML = `
            <h2>${data.firstName} ${data.lastName}</h2>
            <p>Email: ${data.email}</p>
            <p>Phone: ${data.phone}</p>
            <p>Age: ${data.age}</p>
            <p>Address: ${data.address.city}, ${data.address.state}</p>
        `;
        console.log('Response:', data);
    })
    .catch(error => console.error('Error:', error));

// Fetch the user's posts
fetch(`https://dummyjson.com/users/${userId}/posts`)
    .then(response => response.json())
    .then(data => {
        const postsDiv = document.getElementById('staffPosts');
        data.posts.forEach(post => {
            const postCard = document.createElement('div');
            postCard.innerHTML = `
                <h2>User Posts</h2>
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <button onclick="viewComments(${post.id})">View Comments</button>
                <div id="postComments${post.id}"></div>
            `;
            postsDiv.appendChild(postCard);
        });
        console.log('Response:', data);
    })
    .catch(error => console.error('Error:', error));

// Fetch the comments for a post
function viewComments(postId) {
    fetch(`https://dummyjson.com/posts/${postId}/comments`)
        .then(response => response.json())
        .then(data => {
            const commentsDiv = document.getElementById(`postComments${postId}`);
            commentsDiv.innerHTML = ''; // Clear previous comments
            data.comments.forEach(comment => {
                const commentCard = document.createElement('div');
                commentCard.innerHTML = `
                    <h4>${comment.user.username}</h4>
                    <p>${comment.body}</p>
                `;
                commentsDiv.appendChild(commentCard);
            });
            console.log('Response:', data);
        })
        .catch(error => console.error('Error:', error));
}