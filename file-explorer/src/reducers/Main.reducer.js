import FileExplorerConstants from '../components/FileExplorerConstant'

const initialState = {
    path:[],
    pathTree:[],
    files:[],
    selectedFile: null,
    loading: false,
    isMenuVisible: false,
    actionMenuPosition: null,
    showInfoModal: false,
    searchFilter: '',
    showCreateModal:false
}

const MainReducer = (state=initialState, action) => {
    switch (action.type){
        case FileExplorerConstants.LOAD_FILES:
            return {
                ...state,
            };
        case FileExplorerConstants.FILE_LOADING_IN_PROGRESS:
            return {
                ...state,
                loading: true
            }
        case FileExplorerConstants.FILE_LOADING_IN_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case FileExplorerConstants.SET_FILES:
            return {
                ...state,
                files:action.payload
            }
        case FileExplorerConstants.SET_PATH_TREE:
            return {
                ...state,
                pathTree:[...action.payload]
            }
        case FileExplorerConstants.UPDATE_PATH_TREE:
            let newState = {...state}
            let indexPath = action.payload.indexPath
            let currentPath = null
            indexPath.forEach((value, index)=>{
                currentPath = index === 0 ? newState.pathTree[value] : currentPath.subMenu[value]
                })
            currentPath.subMenu = action.payload.subMenu
            return {
                ...state,
                pathTree:[...newState.pathTree]
            }
        case FileExplorerConstants.UPDATE_PATH:
            return {
                ...state,
                path:[...state.path,action.payload]
            }
        case FileExplorerConstants.SET_PATH:
            return {
                ...state,
                path:action.payload
            }
        case FileExplorerConstants.NAVIGATE_IN_PATH_BY_INDEX:
            return {
                ...state,
                path:[...state.path,action.payload]
            }
        case FileExplorerConstants.SET_ACTION_MENU_VISIBILITY:
            return {
                ...state,
                isMenuVisible: action.payload
            }
        case FileExplorerConstants.SET_ACTION_MENU_POSITION:
            return {
                ...state,
                actionMenuPosition: action.payload
            }
        case FileExplorerConstants.SET_SELECTED_FILE:
            return {
                ...state,
                selectedFile: action.payload
            }
        case FileExplorerConstants.SHOW_INFO_MODAL:
            return {
                ...state,
                showInfoModal:true
            }
        case FileExplorerConstants.SET_SEARCH_FILTER:
            return {
                ...state,
                searchFilter:action.payload
            }
        case FileExplorerConstants.SHOW_CREATE_MODAL:
            return {
                ...state,
                showCreateModal:!state.showCreateModal
            }
        default:
            return state
    }
}

export default MainReducer;
