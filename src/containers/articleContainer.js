import React from 'react'
import '../css/articleComponentStyle.css'
import ArticleComponent from '../components/articleComponent'
import NavContainer from '../containers/navContainer'
import GetCharacters from '../apicall/GetCharacters'
export default function ArticleContainer(){
    return (
        <React.Fragment>
            <NavContainer></NavContainer>
            <ArticleComponent className="articleComponentStyle" content={
                <React.Fragment>
                    <label id="characterLabel">Peronagem</label>
                    <label id="characterLabelSeries">Séries</label>
                    <label id="characterLabelEvents">Eventos</label>    
                    <GetCharacters characterName=""></GetCharacters>
                </React.Fragment>
            }></ArticleComponent>
        </React.Fragment>
    )
}