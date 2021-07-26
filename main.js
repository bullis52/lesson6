//1.
//Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
//https://jsonplaceholder.typicode.com/posts

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(posts => {

        for (const post of posts) {
            let userDiv = document.createElement('div');
            userDiv.innerText = `${post.userId} - ${post.id} - ${post.title} -${post.body} `;
            let target = document.getElementById('target');
            target.append(userDiv);
        }

    });
//2.
 ////Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
//https://jsonplaceholder.typicode.com/comments
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(comments => {

        for (const comment of comments) {
            let userDiv = document.createElement('div');
            userDiv.innerText = `${comment.postId} - ${comment.id} - ${comment.name} - ${comment.email} - ${comment.body}`;
            let target = document.getElementById('target');
            target.append(userDiv);
        }

    });
