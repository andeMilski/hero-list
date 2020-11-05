import React from 'react'
import PageNavigation from '../events/PageNavigation'
import GetCharactersList from '../apicall/GetCharacters'

export const ButtonComponent = (props) => (
    <button className={props.className} id={"searchButtonFooter" + props.id} onClick={()=> 
        {(new PageNavigation).NextPage(props.id)}}>{props.value}</button>
)

export default ButtonComponent