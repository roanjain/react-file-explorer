import { useDispatch, useSelector } from 'react-redux'
import { searchByFilter } from '../actions/FileExplorerActions'
import React from 'react'

const Search = () => {

    console.log("Rendering search component")
    const dispatch = useDispatch()
    const searchFilter = useSelector(state=> state.searchFilter)

    const handleSearch = (e) =>{
        dispatch(searchByFilter(e.currentTarget.value))
    }

    return (
        <div className="rightSearch pull-right">
            <input type="text" className="form-control" value={searchFilter} onChange={handleSearch} placeholder="Search for anything"/>
        </div>
    )
}

export default React.memo(Search)

