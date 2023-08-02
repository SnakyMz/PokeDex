export default function popup(data) {
    const commentsHead = document.createElement('h4');
    const comments = document.createElement('ul');
    data.forEach((com) => {
        const li = document.createElement('li');
        li.innerHTML = `${com.creation_date} ${com.username}: ${com.comment}`;
        comments.appendChild(li);
        commentsHead.innerHTML = `Comments(${comments.childElementCount})`;
    });
    return comments.childElementCount;
}