const cleanContent = () => $content.html('');
const $content = $('#content');

const userTodoListRender = list => {
    let icon;
    $content.append('<div class="card todoList" id="todoList"><h2>Todo list</h2></div>');
    list.forEach(todo => {
        if (todo.completed) {
            icon = 'done_all';
        } else {
            icon = 'close';
        }
        $('#todoList').append(`
                <h5><span class="material-symbols-outlined">${icon}</span>
                ${todo.title}</h5>
            `);
    });
};

const commentsRender = (comments) => {
    $(`[data-comment-post-id=${comments[0].postId}]`).html('');
    comments.forEach(comment => {
        $(`[data-comment-post-id=${comment.postId}]`).append(`
                <hr class="hr-light">
                <h5>Name: ${comment.name} | Email: ${comment.email}</h5>
                <h5>${comment.body}</h5>
            `);
    });
};

const albumPhotosRender = (albumId, photos) => {
    const albumDiv = $(`[data-photos-album-id=${albumId}]`);
    albumDiv.html('');
    photos.forEach(photo => {
        const photoUrl = photo.thumbnailUrl.split('/');
        if (photoUrl[photoUrl.length - 1].length === 6) {
            albumDiv.append(`
                    <a href="${photo.url}" class="show-photo-big"><img src="${photo.thumbnailUrl}" class="show-photo-big"></a>
                `);
        }
    });
};

const userAlbumsRender = (user, allAlbums) => {
    $content.append(`
                <div class="card userAlbumCard" id="userAlbumsCard-${user.id}">
                    <h2>
                        <a data-user-id="${user.id}" class="user-info" href="#">${user.name}'s</a> albums | 
                        <a data-user-id="${user.id}" href="#" class="posts">Posts</a>
                    </h2>
                </div>
                `);
    allAlbums.forEach(album => {
        if (album.userId === user.id) {
            $(`#userAlbumsCard-${user.id}`).append(`
                    <h3>
                        <a href="#" class="album-link" data-album-id="${album.id}">${album.title}</a>
                    </h3>
                        <div data-photos-album-id="${album.id}" class="hide"></div>
                `);
        }
    });
};

const userPostsRender = (user, posts) => {
    $content.append(`
                <div class="card userPostsCard" id="userPostsCard-${user.id}">
                    <h2>
                        <a data-user-id="${user.id}" class="user-info" href="#">${user.name}'s</a> posts | 
                        <a data-user-id="${user.id}" href="#" class="albums">Albums</a>
                    </h2>
                </div>
                `);

    posts.forEach(post => {
        $(`#userPostsCard-${user.id}`).append(`
                <h3>
                    <a href="#" class="post-link" data-post-id="${post.id}">${post.title}</a>
                </h3>
                <div data-post-body-id="${post.id}" class="hide">
                    <h4>${post.body}</h4>
                    <div><h6><a href="#" class="load-comment" data-post-id="${post.id}">Load comments</a></h6></div>
                    <div data-comment-post-id="${post.id}"></div>
                    <hr>
                </div>
            `);
    });
};

const userInfoRender = user => {
    $content.append(`
            <div class="card userInfo">
                <h2>${user.name} | 
                    <a data-user-id="${user.id}" href="#" class="posts">Posts</a> | 
                    <a data-user-id="${user.id}" href="#" class="albums">Albums</a>
                </h2>
                <h3>Username: ${user.username}</h3>
                <h3>Phone: <a href="tel:${user.phone}">${user.phone}</a></h3>
                <h3>Email: <a href="mailto:${user.email}">${user.email}</a></h3>
                <h3>Website: <a href="http://${user.website}" target="_blank">${user.website}</a></h3>
                <h2>Company</h2>
                <h3>${user.company.name} - <i>"${user.company.catchPhrase}"</i></h3>
                <h4>${user.company.bs}</h4>
                <h2>Address</h2>
                <h3>City: ${user.address.city}</h3>
                <h3>Street: ${user.address.street}, ${user.address.suite}</h3>
                <h3>Zipcode: ${user.address.zipcode}</h3>
            </div>
        `);
};

const allUsersRender = (users) => {
    users.forEach(user => {
        $content.append(`
                <div class="card">
                    <h2> <a data-user-id="${user.id}" class="user-info" href="#">${user.name}</a></h2>
                    <h3>Username: ${user.username}</h3>
                    <h3>City: ${user.address.city}</h3>
                    <h3>Company: ${user.company.name}</h3>
                    <h4>Email: <a href="mailto:${user.email}">${user.email}</a> </h4>
                    <h4>Phone: ${user.phone}</h4>
                    <h4>Website: ${user.website}</h4>
                    <h4>
                        <a data-user-id="${user.id}" href="#" class="posts">Posts</a> | 
                        <a data-user-id="${user.id}" href="#" class="albums">Albums</a>
                    </h4>
                </div>
            `);
    });
};