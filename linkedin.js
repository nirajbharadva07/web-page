let isLiked = false;
let likesCount = 0;

function toggleLike() {
    isLiked = !isLiked;
    likesCount = isLiked ? likesCount + 1 : likesCount - 1;
    updateLikeUI();
}

function updateLikeUI() {
    const likeIcon = document.getElementById('like-icon');
    const likesCountElement = document.getElementById('likes-count');

    likeIcon.textContent = isLiked ? '👍' : '🤍';
    likesCountElement.textContent = likesCount;
}
updateLikeUI();

function toggleComment() {
    const commentsContainer = document.getElementById('comments');
    commentsContainer.style.display = commentsContainer.style.display === 'none' ? 'block' : 'none';
}

function sharepost() {
    alert("Share Post");
}

function addComment() {
    const commentInput = document.getElementById('comment-input');
    const commentText = commentInput.value.trim();

    if (commentText) {
        const commentList = document.getElementById('comment-list');
        const commentDiv = document.createElement('div');
        commentDiv.textContent = commentText;
        commentList.appendChild(commentDiv);

        commentInput.value = '';
    }
}

let shareCount = 0;

function toggleshare() {
        shareCount++;
        document.getElementById("share-count").innerText = shareCount;
        alert("Shared!");
}