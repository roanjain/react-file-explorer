import React from 'react'
import {Container, Row, Col } from "react-bootstrap";

import { useDispatch } from 'react-redux'
import { setActionMenuVisibility } from '../actions/FileExplorerActions'

import SideBar from '../components/sideNavigation/SideBar'
import FileViewer from './FileViewer'
import ActionMenu from './ActionMenu'
import AddFile from './AddFile'
import FileInfo from './FileInfo'

const FileExplorer = () => {

    console.log("Rendering File Explorer...")
    const dispatch = useDispatch()

    const hideActionMenu = () => {
        dispatch(setActionMenuVisibility(false))
    }

    return (
        <Container fluid className="fullHeight" onClick={hideActionMenu} onContextMenu={hideActionMenu}>
            <Row className="fullHeight margin_0">
                <Col xs={4} sm={4} md={3} lg={3} className="leftBox fullHeight overflow-y">
                    <h2>Root</h2>
                    <SideBar/>
                </Col>
                <Col xs={8} sm={9} md={9} lg={9} className="rightBox fullHeight overflow-y">
                    <FileViewer/>
                    <ActionMenu/>
                    <FileInfo/>
                    <AddFile/>
                </Col>
            </Row>
        </Container>
    )
}

export default FileExplorer