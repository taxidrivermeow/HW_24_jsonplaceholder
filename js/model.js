const url = 'https://jsonplaceholder.typicode.com';

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

const getAllAlbums = () => {
    let albums = {};
    const currentUrl = `${url}/albums`;
    const settings = {
        type: 'GET',
        async: false,
        success: data => {
            albums = [...data];
        },
        error: err => {
            console.log('Ajax error');
        },
    };

    $.ajax(currentUrl, settings);
    return albums;
};

const getPhotosByAlbumId = albumId => {
    let photos = {};
    const currentUrl = `${url}/photos?albumId=${albumId}`;
    const settings = {
        type: 'GET',
        async: false,
        success: data => {
            photos = [...data];
        },
        error: err => {
            console.log('Ajax error');
        },
    };

    $.ajax(currentUrl, settings);
    return photos;
};

const getAlbumsByUserId = userId => {
    let albums = {};
    const currentUrl = `${url}/albums?userId=${userId}`;
    const settings = {
        type: 'GET',
        async: false,
        success: data => {
            albums = [...data];
        },
        error: err => {
            console.log('Ajax error');
        },
    };

    $.ajax(currentUrl, settings);
    return albums;
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