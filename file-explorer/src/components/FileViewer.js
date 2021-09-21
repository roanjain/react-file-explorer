import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadFiles } from '../actions/FileExplorerActions'
import Loader from './Loader'
import File from './File'
import NavigateBack from './NavigateBack'
import Search from './Search'
import { Row, Col } from "react-bootstrap";
import { navigateInPathByIndex } from '../actions/FileExplorerActions'
import useToggleCreateModalVisibility from '../hooks/useToggleCreateModalVisibility'

const FileViewer = () => {

    const dispatch = useDispatch()

    const files = useSelector(state => state.files)
    const loading = useSelector(state => state.loading)
    const path = useSelector(state => state.path)
    const searchFilter = useSelector(state => state.searchFilter)

    const handlePathNavigation = pathIndex => (e) => {
        e.preventDefault()
        dispatch(navigateInPathByIndex(pathIndex))
    }

    const toggleCreateModalVisibility = useToggleCreateModalVisibility()

    console.log("Rendering File Viewer...",{files, loading, path, searchFilter})

    useEffect(()=> {
        console.log("Rendering File Viewer dispatch...",{files, loading, path, searchFilter})
        dispatch(loadFiles())
    },[searchFilter])

    return (
        <>
        <div className="head">
            <Row>
                <Col xs={12} sm={4} className="pull-right">
                    <Search/>
                </Col>
                <Col xs={12} sm={8}>
                    <h1>
                        <NavigateBack/>
                        {path.length ? path.map((name, index, arr)=> {
                            return  <>{(index === 0 ?
                                <>
                                <a href="#" onClick={handlePathNavigation(-1)} key={index}>root</a>
                                <span className="sep">/</span>
                                </>:'') } {(arr.length-1 === index ? <span>{name.toLowerCase()}</span>  :
                                    (<><a href="#" onClick={handlePathNavigation(index)}>{name.toLowerCase()}</a>
                                    <span className="sep">/</span></>))}</>
                        }): <span>root</span>
                        }
                    </h1>
                </Col>
            </Row>
        </div>
        <div className="centerList">
            {
                loading ? <Loader/> : <><ul> {files.length ?
                     files.map((file,index)=>{
                            return <File type={file.type} createdAt={file.createdAt} size={file.size} name={file.name} key={index}/>
                        }) : ''}
                    <li className="listItem">
                        <a href="#" onClick={toggleCreateModalVisibility} className="cLink addLink" data-toggle="modal" data-target="#createFileModal">
                            +
                        </a>
                    </li>
                </ul></>
            }
        </div>
        </>
    )
}

export default FileViewer