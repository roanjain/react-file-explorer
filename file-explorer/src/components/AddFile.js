import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modal, Button } from 'react-bootstrap'
import { createFileOrFolder } from '../actions/FileExplorerActions'

const AddFile = () => {

    console.log("Rendering Add File.....")
    const dispatch = useDispatch()

    const initialState = {
        name: '',
        creator:'',
        size:'',
        date:''
    }

    const form = useRef()
    const closeRef = useRef()
    const [{name,creator, size, date}, setMetaData] = useState(initialState)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createFileOrFolder({name,creator, size, date},closeRef))
        clearState()
    }

    const clearState = () =>{
        setMetaData(prevState=> initialState)
    }

    const onChange = e => {
        const { name, value } = e.target;
        setMetaData(prevState => ({ ...prevState, [name]: value }));
    };

    return (
        <div className="modal fade" id="createFileModal" role="dialog">
            <div className="modal-dialog modal-sm">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" ref={closeRef} onClick={clearState} title="close"/>
                        <h1 className="modal-title">Create New</h1>
                        <ul className="pagination custom">
                            <li><a href="#" role="button">File</a></li>
                            <li className="active"><a href="#" role="button">Folder</a></li>
                        </ul>
                    </div>
                    <div className="modal-body">
                        <form ref={form} onSubmit={handleSubmit}>
                            <legend>
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="name">Name</label>
                                    <input type="text" className="form-control" id="Name" placeholder="Name" name="name" value={name}
                                    onChange={onChange}/>
                                </div>

                                <div className="form-group">
                                    <label className="sr-only" htmlFor="Creator">Creator</label>
                                    <input type="text" className="form-control" id="Creator" placeholder="Creator" name="creator" value={creator}
                                           onChange={onChange}/>
                                </div>

                                <div className="form-group">
                                    <label className="sr-only" htmlFor="Size">Size</label>
                                    <input type="text" className="form-control" id="Size" placeholder="Size" value={size} name="size"
                                           onChange={onChange}/>
                                </div>

                                <div className="form-group">
                                    <label className="sr-only" htmlFor="Date">Date</label>
                                    <input type="text" className="form-control" id="Date" placeholder="Date" value={date} name="date"
                                           onChange={onChange}/>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Create</button>
                            </legend>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddFile