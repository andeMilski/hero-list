import React from 'react'
import ReactDOM from 'react-dom';
import ArticleComponent from '../components/articleComponent'
import GetCharacters from '../apicall/GetCharacters'

export default function SearchCharacterByName(name){
    ReactDOM.render(
        <React.StrictMode>
            <ArticleComponent className="articleComponentStyle" content={
                <React.Fragment>
                    <label id="characterLabel">Peronagem</label>
                    <label id="characterLabelSeries">Séries</label>
                    <label id="characterLabelEvents">Eventos</label>    
                    {<GetCharacters characterName={name}></GetCharacters>}
                </React.Fragment>
            }></ArticleComponent>
        </React.StrictMode>,
        document.querySelector(".articleComponentStyle")
      );
    return null;
}


