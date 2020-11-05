import React from 'react';
import ReactDOM from 'react-dom';
import '../css/aditionalInfoCharacter.css'
import '../css/CharacterMidiasStyle.css'
import SectionComponent from '../components/sectionComponent'
import CardDetailsInfo from '../components/cardDatalsInfo'
import DetailsCharacter from './detailsInfoCharacter'
export default function AdicionalCharacterInformation(props){
    let id = props.characterProps.id;
    let detailsCharacter = new DetailsCharacter();
    ReactDOM.render(
        <React.StrictMode>
            {detailsCharacter.ToogleDetailsCharacter(id)}
            <SectionComponent content={
                <CardDetailsInfo content={props}></CardDetailsInfo>
            }></SectionComponent>
        </React.StrictMode>,
        document.querySelector("#character" + id)
      );
    return null;
}