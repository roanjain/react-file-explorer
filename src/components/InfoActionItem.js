
import useGetInfoFile from '../hooks/useGetInfoFile'
import { useSelector } from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import Typography from '@material-ui/core/Typography';

import MenuItem from '@material-ui/core/MenuItem';
import React from 'react'

const InfoActionItem = (props) => {

    console.log("Rendering action => Info")

    const { selectedFile, showInfoModal } = useSelector(state=> state)
    const InfoFile = useGetInfoFile(selectedFile)

    return (
        <div>
            <MenuItem onClick={InfoFile} data-toggle="modal" data-target="#fileInfoModal">
            <Typography variant="inherit">
                Get Info
            </Typography>
        </MenuItem>
        </div>
    );
}

export default React.memo(InfoActionItem)
