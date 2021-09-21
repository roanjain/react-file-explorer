
import { showInfo } from '../actions/FileExplorerActions'
import { useDispatch } from 'react-redux'

import React from 'react'

const useGetInfoFile = props => {
    const dispatch = useDispatch()

    return (e) => {
        dispatch(showInfo())
    }

}

export default useGetInfoFile