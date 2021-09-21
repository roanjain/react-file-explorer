import React from 'react'
import { useRef } from 'react'

const NavigationItem = (props) => {

    const { item, indexPath, toggleNavigation } = props
    const ref = useRef(false)

    console.log("Rendering NavigationItem...",item.name)
    return (
        <li ref={ref}><a href="#" onClick={toggleNavigation(indexPath,ref)}
               className="link_L1 dropdownLink"> {item.name}
            {item.type === 'dir'? <span className="caret"/>: ''}  </a>
            {item.subMenu && item.subMenu.length > 0 ? <ul className="leftNav_L2">{ item.subMenu.map((item,index)=>{
                return <NavigationItem toggleNavigation={toggleNavigation} item={item} indexPath={([...indexPath,index])} key={index}/>
            })}</ul> :''}
        </li>
    )
}

//export default React.memo(NavigationItem)
export default NavigationItem