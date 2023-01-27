(()=>{
    const url = 'https://jsonplaceholder.typicode.com';
    const $content = $('#content');

    const getUserById = id => {
        let user = {};
        const currentUrl = `${url}/users?id=${id}`;
        const settings = {
            type: 'GET',
            async: false,
            success: data => {
                user = [...data][0];
            },
            error: err => {
                console.log('Ajax error');
            },
        };

        $.ajax(currentUrl, settings);
        return user;
    };

    const getPostById = postId => {
        let post = {};
        const currentUrl = `${url}/posts?id=${postId}`;
        const settings = {
            type: 'GET',
            async: false,
            success: data => {
                post = [...data][0];
            },
            error: err => {
                console.log('Ajax error');
            },
        };

        $.ajax(currentUrl, settings);
        return post;
    };

    const getUserTodoList = id => {
        let list = {};
        const currentUrl = `${url}/todos?userId=${id}`;
        const settings = {
            type: 'GET',
            async: false,
            success: data => {
                list = [...data];
            },
            error: err => {
                console.log('Ajax error');
            },
        };
        $.ajax(currentUrl, settings);
        return list;
    };

    const getCommentsByPostId = postId => {
        let comments = {};
        const currentUrl = `${url}/posts/${postId}/comments`;
        const settings = {
            type: 'GET',
            async: false,
            success: data => {
                comments = [...data];
            },
            error: err => {
                console.log('Ajax error');
            },
        };
        $.ajax(currentUrl, settings);
        return comments;
    };

    const getPostListByUserId = userId => {
        let posts = {};
        const currentUrl = `${url}/posts?userId=${userId}`;
        const settings = {
            type: 'GET',
            async: false,
            success: data => {
                posts = [...data];
            },
            error: err => {
                console.log('Ajax error');
            },
        };
        $.ajax(currentUrl, settings);
        return posts;
    };

    const getUserInfo = id => {
        let user = {};
        const currentUrl = `${url}/users/${id}`;
        const settings = {
            type: 'GET',
            async: false,
            success: data => {
                user = {...data};
            },
            error: err => {
                console.log('Ajax error');
            },
        };
        $.ajax(currentUrl, settings);
        return user;
    }

    const getAllUsers = () => {
        let users = {};
        const currentUrl = `${url}/users`;
        const settings = {
            type: 'GET',
            async: false,
            success: data => {
                users = [...data];
            },
            error: err => {
                console.log('Ajax error');
            },
        };
        $.ajax(currentUrl, settings);
        return users;
    }

    const cleanContent = () => $content.html('');

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

    const userPostsRender = (user, posts) => {
        $content.append(`
                <div class="card userPostsCard" id="userPostsCard-${user.id}">
                    <h2><a data-user-id="${user.id}" class="user-info" href="#">${user.name}'s</a> posts</h2>
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
                <h2>${user.name} | <a data-user-id="${user.id}" href="#" class="posts">Posts</a></h2>
                <h3>Username: ${user.username}</h3>
                <h3>Phone: <a href="tel:${user.phone}">${user.phone}</a></h3>
                <h3>Email: <a href="mailto:${user.email}">${user.email}</a></h3>
                <h3>Website: <a href="http://${user.website}" target="_blank">${user.website}</a></h3>
                <h2>Company</h2>
                <h3>${user.company.name} - <i>"${user.company.catchPhrase}"</i></h3>
                <h4>${user.company.bs}</h4>
                <h2>Address</h2>
                <h3>City: ${user.address.city}</h3>
                <h3>Street: ${user.address.street}</h3>
                <h3>Suite: ${user.address.suite}</h3>
                <h3>Zipcode: ${user.address.zipcode}</h3>
<!--                <h2>Todo list</h2>-->
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
                    <h4><a data-user-id="${user.id}" href="#" class="posts">Posts</a></h4>
                </div>
            `);
        });
    };

    $('#menu li').on('click', e => {
        $('#menu li').each((index, element) => {
            element.classList.remove('active');
        })
        e.target.classList.add('active');
    });

    $('#allUsers').on('click', e => {
        $content.html('<h2>Users loading...</h2>');
        cleanContent();
        allUsersRender(getAllUsers());
    });

    $('#allPosts').on('click', e => {
        $content.html('<h2>Posts loading...</h2>');
        cleanContent();
        const users = getAllUsers();

        users.forEach(user => {
            const posts = getPostListByUserId(user.id);
            userPostsRender(user, posts);
        });
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
    });

    allUsersRender(getAllUsers());
})()