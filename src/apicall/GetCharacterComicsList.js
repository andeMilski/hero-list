import React, {useState, useEffect, useCallback} from 'react'
import {GetCharactersComicsList} from '../api/marvel';
import CharacterComicsCard from '../components/characterComicsCard'
export default function CharacterComicsList(props){
    let [data, setData] = useState([]);
        useEffect(() =>{
            GetCharactersComicsList(props.id).then(data => {
                setData(data);   
            });
         },[]);
    return (
        <React.Fragment>
            {data.slice(0,4).map(character => 
                <CharacterComicsCard content={
                    <React.Fragment>
                        <div className="card">
                            <img className="imgMidiasCharacter" src={character.thumbnail.path + "." + character.thumbnail.extension}></img>
                            <h4 className="titleMidia"><b>{character.title}</b></h4> 
                        </div>
                    </React.Fragment>
                }></CharacterComicsCard>
             ) 
            }
        </React.Fragment>
    )
}