import React from 'react'
import SearchCharacterByName from '../events/SearchCharacterByName'
export const InputComponent = (props) => (
    <input id={props.id} onBlur={(e)=> SearchCharacterByName(e.target.value)} placeholder={props.placeholder}/>
)
export default InputComponent