import React from 'react'
import { useSelector } from 'react-redux'

const FileInfo = () => {

    console.log("Rendering File Info Modal")

    const selectedFile = useSelector(state=> state.selectedFile)

    return (
        <div className="modal fade" id="fileInfoModal" role="dialog">
            <div className="modal-dialog modal-sm">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" title="close"></button>
                        <h1 className="modal-title">File Info</h1>
                    </div>
                    <div className="modal-body">

                        <div className="text-center mt10">
  <span className="cLink onlyFile">
    <span className="fileType file"><span className="text"> html</span></span>
  </span>
                        </div>

                        <table className="table noLineTable mt20 mb0">
                            <tbody>
                            <tr>
                                <td className="text-right">Name:</td>
                                <td className="text-hint">{selectedFile && selectedFile.name}</td>
                            </tr>
                            <tr>
                                <td className="text-right">Size:</td>
                                <td className="text-hint">{selectedFile && selectedFile.size}</td>
                            </tr>
                            <tr>
                                <td className="text-right">Creator Name:</td>
                                <td className="text-hint">Ankur</td>
                            </tr>
                            <tr>
                                <td className="text-right">Created date:</td>
                                <td className="text-hint">{selectedFile && selectedFile.createdAt}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FileInfo