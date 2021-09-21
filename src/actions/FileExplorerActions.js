import FileExplorerConstants from '../components/FileExplorerConstant'
import * as FileService from '../api/FileExplorer.service'

export const loadInProgress = () => {
    return {
        type: FileExplorerConstants.FILE_LOADING_IN_PROGRESS
    }
}

export const loadSuccess = () => {
    return {
        type: FileExplorerConstants.FILE_LOADING_IN_SUCCESS
    }
}

export const setFiles = (files) => {
    return {
        type: FileExplorerConstants.SET_FILES,
        payload: files
    }
}

export const setPathTree = (files) => {
    return {
        type: FileExplorerConstants.SET_PATH_TREE,
        payload: files
    }
}

export const initializePathTree = () => async (dispatch, getState) => {
    let response = await FileService.list([].join('/'))
    let files = await response.json()

    const filesTree = files.data.map(file=>{ return {...file, subMenuActive:false, subMenu:[]} })
    dispatch(setPathTree(filesTree))
}

export const updatePathTree = (indexPath,files) => {
    return {
        type: FileExplorerConstants.UPDATE_PATH_TREE,
        payload: {
            indexPath: indexPath,
            subMenu: files
        }
    }
}

export const expandNavigationTreeByIndex = (indexPath) => async (dispatch, getState) => {
    const { pathTree } = getState()
    console.log("pathTree",pathTree)
    let pathList = []
    let currentPath = {}
    indexPath.forEach((value, index)=>{
        currentPath = index === 0 ? pathTree[value] : currentPath.subMenu[value]
        pathList.push(currentPath.name)
    })

    let response = await FileService.list(pathList.join('/'))
    let files = await response.json()

    dispatch(updatePathTree(indexPath,files.data))
}

export const collapseNavigationTreeByIndex = (indexPath) => (dispatch, getState) => {
    dispatch(updatePathTree(indexPath,[]))
}

export const loadFiles = () => async (dispatch, getState) => {
    const { path, searchFilter } = getState()
    dispatch(loadInProgress())

    let response = await FileService.list(path.join('/'))
    let files = await response.json()

    files = searchFilter? files.data.filter((file)=> file.name.toLowerCase().match(searchFilter.toLowerCase())) : files.data
    dispatch(setFiles(files))
    dispatch(loadSuccess())
}

export const updatePath = (name) => {
    return {
        type: FileExplorerConstants.UPDATE_PATH,
        payload: name
    }
}

export const setPath = (path) => {
    return {
        type: FileExplorerConstants.SET_PATH,
        payload: path
    }
}

export const navigateInPathByIndex = (pathIndex) => async (dispatch, getState) => {
    const { path } = getState()
    const newPath = path.slice(0,++pathIndex)
    dispatch(setPath(newPath))
    dispatch(searchByFilter(''))
    dispatch(loadFiles())
}

export const navigateBack = (pathIndex) => (dispatch, getState) => {
    const { path } = getState()
    const newPath = path.slice(0,path.length-2)
    dispatch(setPath(newPath))
    dispatch(loadFiles())
}

export const openFolder = (name) => (dispatch, getState) => {
    dispatch(updatePath(name))
    dispatch(searchByFilter(''))
    dispatch(loadFiles())
}

export const deleteFileOrFolder = (name, type) => async (dispatch, getState) => {
    const { path } = getState();
    const deleteDir = type === 'dir'
    dispatch(loadInProgress())
    let response = await  FileService.deleteFileOrFolder(path.join('/'), [name], deleteDir)
    dispatch(loadFiles())
    dispatch(loadSuccess())
}

export const showInfo = () => {
    return {
        type: FileExplorerConstants.SHOW_INFO_MODAL
    }
}

export const setSelectedFile = (file) => {
    return {
        type: FileExplorerConstants.SET_SELECTED_FILE,
        payload: file
    }
}

export const setActionMenuVisibility = (visible) => {
    return {
        type: FileExplorerConstants.SET_ACTION_MENU_VISIBILITY,
        payload: !!visible
    }
}

export const setMenuPosition = (x,y) => {
    return {
        type: FileExplorerConstants.SET_ACTION_MENU_POSITION,
        payload: {x:x,y:y}
    }
}

export const searchByFilter = (search) => {
    return {
        type: FileExplorerConstants.SET_SEARCH_FILTER,
        payload: search
    }
}

export const toggleCreateModalVisibility = () => {
    return {
        type: FileExplorerConstants.SHOW_CREATE_MODAL
    }
}

export const createFileOrFolder = (data, closeRef) => async (dispatch, getState) => {
    const { path } = getState()
    dispatch(loadInProgress())

    const response = await FileService.createFileOrFolder(path.join('/'), data.name)
    const file = await response.json()

    dispatch(loadSuccess())

    closeRef.current.click()
    dispatch(loadFiles())
}
