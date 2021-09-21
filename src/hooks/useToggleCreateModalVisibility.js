import { useDispatch } from 'react-redux'
import { toggleCreateModalVisibility } from '../actions/FileExplorerActions'

const useToggleCreateModalVisibility = () => {
    const dispatch = useDispatch()

    return (e) => {
        e.preventDefault()
        dispatch(toggleCreateModalVisibility())
    }
}

export default useToggleCreateModalVisibility