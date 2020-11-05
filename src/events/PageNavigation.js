import React from 'react'
import ReactDOM from 'react-dom';
import ArticleComponent from '../components/articleComponent'
import GetCharacters from '../apicall/GetCharacters'

export default function PageNavigation(){}

PageNavigation.prototype.NextPage = function(page){
    const clickedButton = document.querySelector("#searchButtonFooter" + page);
    document.querySelectorAll(".inactive").forEach(buttonSearch => {
        buttonSearch.classList.remove("active")   
    })
    if(clickedButton.classList !== null && clickedButton.classList.contains("arrow")){
        let arrowSingleValue = document.querySelector("#arrowNextValue");
        arrowSingleValue.value = (parseInt(arrowSingleValue.value) + 1);
        page = arrowSingleValue.value;
    }else if(clickedButton.classList !== null && clickedButton.classList.contains("doubleArrow")){
        let arrowDoubleValue = document.querySelector("#arrowLastValue");
        arrowDoubleValue.value = (parseInt(arrowDoubleValue.value) + 10);
        page = arrowDoubleValue.value;
    }
    
    clickedButton.classList.add("active");
    ReactDOM.render(
        <React.StrictMode>
            <ArticleComponent className="articleComponentStyle" content={
                <React.Fragment>
                    <label id="characterLabel">Peronagem</label>
                    <label id="characterLabelSeries">Séries</label>
                    <label id="characterLabelEvents">Eventos</label>   
                    <GetCharacters characterName="" page={page}></GetCharacters>
                </React.Fragment>
            }></ArticleComponent>
        </React.StrictMode>,
        document.querySelector(".articleComponentStyle")
      );
    return null;
}
