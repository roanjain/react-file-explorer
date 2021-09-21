
import { setActionMenuVisibility, setMenuPosition, setSelectedFile } from '../actions/FileExplorerActions'
import { useDispatch } from 'react-redux'

import React from 'react'

const useActionMenu = props => {
    const dispatch = useDispatch()

    return (e) => {
        e.preventDefault()
        e.stopPropagation()

        const x = e.clientX
        const y = e.clientY

        dispatch(setSelectedFile(props))
        dispatch(setMenuPosition(x,y))
        dispatch(setActionMenuVisibility(true))
    }
}

export default useActionMenu