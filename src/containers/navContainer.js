import React from 'react'
import { IoMdSearch } from 'react-icons/io'
import '../css/navComponentStyle.css'
import NavComponent from '../components/navComponent'
import H1Component from '../components/h1Component'
import LabelComponent from '../components/labelComponent'
import InputComponent from '../components/inputComponent'
import ImageComponent from '../components/imageComponent'
import SearchImage from '../img/searchImage.png'
export const NavContainer = (props) =>(
    <NavComponent className="navComponentStyle" content={
        <React.Fragment>
            
                
                <H1Component id="titleSearchCharacter" value="Busca de personagens"></H1Component>
                <LabelComponent id="labelSearchCharacter" value="Nome do personagem"></LabelComponent>
                <br/>
            <div class="inputContainer">
                <InputComponent id="inputSearchCharacterByName" placeholder="Search"></InputComponent>
                
            </div>
            
        </React.Fragment>
    }>
    </NavComponent>
)

export default NavContainer