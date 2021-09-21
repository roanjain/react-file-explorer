import API_ from '../api'

const fixPath = (path) => {
    return ('/' + path).replace(/\/\//g, '/');
};

export const list = (path) => {
    path = fixPath(path)
    return fetch(API_.FILE_LIST + (encodeURIComponent(path) || '/'))
}

export function deleteFileOrFolder(path, filenames, recursive = true) {
    path = fixPath(path);
    return fetch(API_.DELETE , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            path, filenames, recursive
        })
    });
}

export const createFileOrFolder = (path, directory) => {
    path = fixPath(path)
    return fetch(API_.FOLDER_CREATE,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            path, directory
        })
    })
}