import React from 'react'
import useFileAction from '../hooks/useFileAction'

const File = (props) => {
    console.log("Rendering File...")

    const { name, type } = props

    const [setSelectedFile, openFile, openActionMenu] = useFileAction(props)

    return (
            <li className="listItem" onClick={setSelectedFile} onDoubleClick={openFile} onContextMenu={openActionMenu}>
                <a href="#" title={name} className="cLink">
                    {type === 'dir'?
                        <><span className="fileType folder"/><span className="fileName">{name}</span></>:
                        <><span className="fileType file">
                            <span className="text"></span>
                        </span><span className="fileName">{name}</span></>}
                </a>
            </li>
    )
}

export default React.memo(File)