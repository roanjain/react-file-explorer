import { useSelector } from 'react-redux'
import { MenuConstant } from '../components/FileExplorerConstant'

const useAction = () => {

    const selectedFile = useSelector((state)=>state.selectedFile)
    /**
     * Handling can be done in this custom hook for cases where different set of actions needs
     * to be returned basis different file types
     */
    return Object.keys(MenuConstant)

}

export default useAction