
import useDeleteFile from '../hooks/useDeleteFile'
import { useSelector } from 'react-redux'

import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import React from 'react'

const DeleteActionItem = (props) => {

    console.log("Rendering action => delete")

    const selectedFile = useSelector((state)=> state.selectedFile)
    const deleteFile = useDeleteFile(selectedFile)

    return (
        <MenuItem onClick={deleteFile}>
            <Typography variant="inherit">
                Delete
            </Typography>
        </MenuItem>
    );
}

export default DeleteActionItem