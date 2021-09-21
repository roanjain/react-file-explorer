import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Menu from '@material-ui/core/Menu';
import useAction from '../hooks/useAction'
import { MenuConstant } from '../components/FileExplorerConstant'
import OpenActionItem from '../components/OpenActionItem'
import DeleteActionItem from '../components/DeleteActionItem'
import InfoActionItem from '../components/InfoActionItem'

export const ActionMenu = () => {

    console.log("Rendering action menu...")
    const isMenuVisible = useSelector(state=> state.isMenuVisible)
    const actionMenuPosition = useSelector(state=> state.actionMenuPosition)
    const { x, y} = actionMenuPosition ? actionMenuPosition : [0,0]

    const actionAllowed = useAction()

    return (
        <div>
            <Menu
                id="fade-menu"
                anchorReference="anchorPosition"
                anchorPosition={{top:y, left: x}}
                open={isMenuVisible}
            >
                {
                    actionAllowed.map((action,index)=>{
                        switch (action){
                            case MenuConstant.OPEN:
                                return <OpenActionItem key={index}/>
                            case MenuConstant.GET_INFO:
                                return <InfoActionItem key={index}/>
                            case MenuConstant.DELETE:
                                return <DeleteActionItem key={index}/>
                        }

                    })
                }
            </Menu>
        </div>
    )
}

export default ActionMenu