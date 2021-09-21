import React from 'react'
import { useDispatch } from 'react-redux'
import { navigateBack } from '../actions/FileExplorerActions'

const NavigateBack = () => {
    const dispatch = useDispatch()

    const clickBack = (e) => {
        e.preventDefault()
        dispatch(navigateBack())
    }

    return (
        <a href="#"  onClick={clickBack} className="back_arrow" title="Back"/>
    )
}

export default NavigateBack