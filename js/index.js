async function loadPosts() {
    try {
        const response = await fetch('https://api.npoint.io/4ab7b65fe5b554488cd3');
        const data = await response.json();

        const postsContainer = document.getElementById('posts-container');
        
        // Clear any existing static content
        postsContainer.innerHTML = '';

        // Iterate over each post in the JSON data
        data.posts.forEach(post => {
            // Create post container
            const postDiv = document.createElement('div');
            postDiv.className = 'post';

            // Create header section
            const postHeader = `
                <div class="post-header">
                    <div class="profile-picture">
                        <img src="images/defaultpfp.png" alt="Profile Picture">
                    </div>
                    <div class="profile-name">
                        <span>${post.author}</span>
                    </div>
                    <div class="post-date">
                        <span>${new Date(post.created_time).toLocaleDateString()}</span>
                    </div>
                </div>
            `;

            // Create content section
            const postContent = `
                <div class="post-content">
                    <p>${post.content}</p>
                    ${post.photo_url ? `<img src="${post.photo_url}" alt="Post Image" class="post-image">` : ''}
                </div>
            `;

            // Create footer section with likes and comments
            const postFooter = `
                <div class="post-footer">
                    <div class="likes-comments">
                        <div class="likes">
                            <img src="images/heart.png" alt="Like">
                            <span>${post.likes}</span>
                        </div>
                        <div class="comments">
                            <img src="images/comment.png" alt="Comment">
                            <span>${post.comments}</span>
                        </div>
                    </div>
                </div>
            `;

            // Combine all sections and add to post div
            postDiv.innerHTML = postHeader + postContent + postFooter;
            postsContainer.appendChild(postDiv);
        });
    } catch (error) {
        console.error('Error loading posts:', error);
    }
}

// Call loadPosts on page load
document.addEventListener('DOMContentLoaded', loadPosts);
