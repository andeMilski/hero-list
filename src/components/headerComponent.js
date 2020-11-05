import React from 'react'
import ImageComponent from './imageComponent'
import LabelHeaderContainer from '../containers/labelHeaderContainer'
import logoHeaderPath from '../img/objective_96_24.png'
import '../css/imageComponentStyle.css'

export const HeaderComponent = (props) => (
    <header className={props.className}>
        <ImageComponent src={logoHeaderPath} id="imageHeaderObjectiveLogo"></ImageComponent>
        <LabelHeaderContainer></LabelHeaderContainer>
        <input type="hidden" id="arrowNextValue" value="3"></input>
        <input type="hidden" id="arrowLastValue" value="10"></input>
    </header>
)
export default HeaderComponent