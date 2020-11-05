import React from 'react'
import '../css/articleComponentStyle.css'
import '../css/tdCharacterContainerStyle.css'
import AdicionalCharacterInformation from '../events/aditionalCharacterInformation'
export const CardCharaterComponent = (props) => (
    <React.Fragment>
        <ul className="charactersList" id={props.characterProps.id} onClick={(() => AdicionalCharacterInformation(props))}>
            <li className="characterImageContainer characterItemContainer imageCharactercontainer">
                <img  src={props.characterProps.thumbnail.path + "." + props.characterProps.thumbnail.extension}></img>
            </li>
            <li className="nameCharacter characterItemContainer nameCharacterContainer">
                {props.characterProps.name}
            </li>
            <li className="characterItemContainer seriesCharacterContainer">
                <ul className="seriesListCharacter">
                    {
                        props.characterProps.series.items.slice(0, 3).map((item) =>
                        <ol>{item.name}</ol>
                    )
                    }   
                </ul>
            </li>
            <li className="characterItemContainer eventsCharacterContainer">
                <ul className="eventListCharacter">
                    {props.characterProps.events.items.slice(0, 3).map((item) =>
                        <ol>{item.name}</ol>)
                    }
                </ul>
            </li>
        </ul>
        <div className="detailsCharacters" id={"character" + props.characterProps.id} style={{display:"none"}}></div>
    </React.Fragment>
)
export default CardCharaterComponent