import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initializePathTree } from '../../actions/FileExplorerActions'
import NavigationItem from './NavigationItem'
import { expandNavigationTreeByIndex, collapseNavigationTreeByIndex } from '../../actions/FileExplorerActions'

const SideBar = () => {

    const dispatch = useDispatch()
    const pathTree = useSelector((state) => state.pathTree)

    const toggleNavigation = useCallback((index, ref) => (e) => {
        e.preventDefault()
        const li = ref.current
        li.value = !li.value
        if(!!li.value === true) {
            li.className = 'open'
            dispatch(expandNavigationTreeByIndex(index))
        } else {
            li.className = ''
            dispatch(collapseNavigationTreeByIndex(index))
        }
    },[])

    useEffect(()=> {
        dispatch(initializePathTree())
    },[])

    console.log("Side bar...",{pathTree})
    return (
        <>
            <ul className="leftNav">
                {
                    pathTree.map((path,index)=>{
                        return (
                            <NavigationItem toggleNavigation={toggleNavigation} item={path} indexPath={[index]} key={index}/>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default SideBar