import React from 'react'
import FileExplorer from './FileExplorer'

import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import  '../assets/main.css'

const App = () =>{
    return (
        <div>
            <FileExplorer/>
        </div>
    )
}

export default App;