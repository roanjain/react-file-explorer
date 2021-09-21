
import useOpenFile from '../hooks/useOpenFile'
import { useSelector } from 'react-redux'

import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import React from 'react'

const OpenActionItem = (props) => {

    console.log("Rendering action => open")

    const { selectedFile } = useSelector(state=> state)
    const openFile = useOpenFile(selectedFile)

    return (
        <MenuItem onClick={openFile}>
            <Typography variant="inherit">
                Open
            </Typography>
        </MenuItem>
    );
}

export default OpenActionItem