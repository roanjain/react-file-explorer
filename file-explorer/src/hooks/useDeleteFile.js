
import { deleteFileOrFolder } from '../actions/FileExplorerActions'
import { useDispatch } from 'react-redux'

import React from 'react'

const useDeleteFile = props => {
    const dispatch = useDispatch()

    return (e) => {
        dispatch(deleteFileOrFolder(props.name,props.type))
    }

}

export default useDeleteFile