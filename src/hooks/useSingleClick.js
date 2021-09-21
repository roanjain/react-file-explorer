import { setSelectedFile } from '../actions/FileExplorerActions'
import { useDispatch } from 'react-redux'

const useSingleClick = (props) => {
    const dispatch = useDispatch()

    return (e) => {
        e.stopPropagation()

        dispatch(setSelectedFile(props))
    }
}

export default useSingleClick