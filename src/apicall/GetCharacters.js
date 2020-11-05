import React, {useState, useEffect, useCallback} from 'react'
import {GetCharactersList, GetCharacterByName} from '../api/marvel';
import CardCharaterComponent from '../components/cardCharacterComponent';
import FooterContainer from '../containers/footerContainer'

export default function Characters(props) {
    console.log("ssssssssssssss " + JSON.stringify(props))
    let offset = (props.page == undefined ? 0 : ((props.page - 1) * 10)) 
    const [data, setData] = useState([])
    useEffect(() =>{
        GetCharactersList(10, offset, props.characterName).then(res => {
                setData(res)
        });
    },[props.page,props.characterName]);
    return (
        <React.Fragment>
            
            {data.slice(0,10).map(character => 
                <CardCharaterComponent key={character.id} characterProps={character}/>
             )}
             {console.log("LLLL " + data.length)}
           <FooterContainer list={data}></FooterContainer>
        </React.Fragment>
    )
}