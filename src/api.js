const hostname = 'http://localhost:8000';

const API_ = {
    FILE_LIST : `${hostname}/fileExplorer/list?path=`,
    FOLDER_CREATE: `${hostname}/fileExplorer/dir/create`,
    DELETE: `${hostname}/fileExplorer/items/remove`,
}

export default API_