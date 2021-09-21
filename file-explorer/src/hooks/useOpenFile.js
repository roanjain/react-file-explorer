
import { openFolder, setActionMenuVisibility } from '../actions/FileExplorerActions'
import { useDispatch } from 'react-redux'

import React from 'react'

const useOpenFile = props => {
    const dispatch = useDispatch()

    return (e) => {
        if (props.type === 'dir') {
            dispatch(openFolder(props.name))
            dispatch(setActionMenuVisibility(false))
        }
    }

}

export default useOpenFile