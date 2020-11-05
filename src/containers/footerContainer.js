import React from 'react'
import FooterComponent from '../components/footerComponent'
import ButtonContainer from '../containers/buttonContainer'
import AngleRigth from '../img/arrow-right.png'
import dbAngleRigth from '../img/db_arrow-right.png'
import '../css/footerComponentStyle.css'
import NavComponent from '../components/navComponent'

export function FooterContainer(props) {
    let i = 0;
    return(<FooterComponent className="footerComponentStyle" content={
            <NavComponent className="footerPageButtons" content={
                <React.Fragment>
                    <ul>  
                        
                        {props.list.length >= 11 ? <li><ButtonContainer className="active inactive" id={++i} value={i}></ButtonContainer></li> : ""}
                        {props.list.slice(0, (Math.round(props.list.length/10))).map(c => 
                            <li>
                                    
                                <ButtonContainer className="inactive" id={++i} value={i}></ButtonContainer>
                            </li>
                        )}
                        <li>
                            <ButtonContainer className="arrow" id={++i} value={<img src={AngleRigth}></img>}></ButtonContainer>
                        </li>
                        <li>
                            <ButtonContainer className="doubleArrow" id={++i} value={<img src={dbAngleRigth}></img>}></ButtonContainer>
                        </li>
                    </ul>
                </React.Fragment>
            }></NavComponent>
        }></FooterComponent>
    )
}
export default FooterContainer