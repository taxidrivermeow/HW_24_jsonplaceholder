(()=>{
    const $modal = $('#modal');

    $('#menu li').on('click', e => {
        $('#menu li').each((index, element) => {
            element.classList.remove('active');
        })
        e.target.classList.add('active');
    });

    $('#menu').on('click', e => {
        if (e.target.classList.contains('allUsers')) {
            $content.html('<h2>Users loading...</h2>');
            cleanContent();
            allUsersRender(getAllUsers());
        };

        if (e.target.classList.contains('allPosts')) {
            $content.html('<h2>Posts loading...</h2>');
            cleanContent();
            const users = getAllUsers();

            users.forEach(user => {
                const posts = getPostListByUserId(user.id);
                userPostsRender(user, posts);
            });
        };

        if (e.target.classList.contains('allAlbums')) {
            $content.html('<h2>Albums loading...</h2>');
            cleanContent();
            const users = getAllUsers();

            users.forEach(user => {
                const allAlbums = getAllAlbums();
                userAlbumsRender(user, allAlbums);
            });
        };
    });


    $content.on('click', e => {
        if (e.target.classList.contains('posts')) {
            const user = getUserById(e.target.dataset.userId);
            const posts = getPostListByUserId(e.target.dataset.userId);
            cleanContent();
            userPostsRender(user, posts);
        }

        if (e.target.classList.contains('post-link')) {
            e.preventDefault();
            $('[data-post-body-id=' + e.target.dataset.postId +']').toggleClass('hide');
        }

        if (e.target.classList.contains('load-comment')) {
            e.preventDefault();
            const comments = getCommentsByPostId(e.target.dataset.postId);
            commentsRender(comments);
        }

        if (e.target.classList.contains('user-info')) {
            e.preventDefault();
            const id = e.target.dataset.userId;
            cleanContent();
            userInfoRender(getUserInfo(id));
            userTodoListRender(getUserTodoList(id));
        }

        if (e.target.classList.contains('album-link')) {
            e.preventDefault();
            const albumId = e.target.dataset.albumId;
            const photos = getPhotosByAlbumId(albumId);
            $(`[data-photos-album-id=${albumId}]`).toggleClass('hide');
            albumPhotosRender(albumId, photos);
        }

        if (e.target.classList.contains('albums')) {
            e.preventDefault();
            cleanContent();
            const userId = e.target.dataset.userId;
            const user = getUserById(userId);
            const album = getAlbumsByUserId(userId);
            userAlbumsRender(user, album);
        }

        if (e.target.classList.contains('show-photo-big')) {
            e.preventDefault();
            $modal[0].classList.remove('hide');
            $('#imgFull').attr('src', e.target.parentElement.href);
        }
    });

    $('body').on('click', e => {
        if (e.target.classList.contains('img-full')) {
            $modal[0].classList.add('hide');
        }
    });

    allUsersRender(getAllUsers());
})()