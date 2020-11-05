import React from 'react'
import ButtonComponent from '../components/buttonComponent'
import PageNavigation from '../events/PageNavigation'
export const ButtonContainer = (props) => (
    <ButtonComponent className={props.className} onClick={() => PageNavigation(props.id)} id={props.id} value={props.value}></ButtonComponent>
)
export default ButtonContainer