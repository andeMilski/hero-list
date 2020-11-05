import React from 'react';
import CharacterComicsList from '../apicall/GetCharacterComicsList'
import DetailsCharacter from '../events/detailsInfoCharacter'
export const CardDetailsInfo = (props) => (
    <React.Fragment>   
        <div className="cardDetailsContainer">
            <div className="containerPerspective">
                <div className="cardCharacterDetails">
                    <div className="titleDetails">
                        <h1 className="titleNameCharacterDetails" onClick={() => 
                            (new DetailsCharacter()).CloseDetailsCharacter(props.content.characterProps.id)}>
                            {props.content.characterProps.name + " [X]"}
                            <hr/>
                        </h1>
                        <ul className="menuDetailsInfo">
                            <li>
                             <label className="closeDetailsCharacter" onClick={() =>  (new DetailsCharacter()).ToogleComicsList(props.content.characterProps.id)}>Comics</label>
                            </li>
                        </ul>
                     </div>
                    <div className="bodyComicsCard" id={"comicsCard" + props.content.characterProps.id} style={{display : "none"}}><br/>
                        <CharacterComicsList id={props.content.characterProps.id}></CharacterComicsList>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
)
export default CardDetailsInfo