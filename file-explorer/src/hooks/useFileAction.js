
import { useRef, useEffect } from 'react'
import useSingleClick from './useSingleClick'
import useOpenFile from './useOpenFile'
import useActionMenu from './useActionMenu'

const useFileAction = props => {

    return [useSingleClick(props), useOpenFile(props), useActionMenu(props)]
}


export default useFileAction