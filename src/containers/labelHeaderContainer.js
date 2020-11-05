import React from 'react'
import '../css/labelHeaderComponentStyle.css'
import LabelComponent from '../components/labelComponent'

export const LabelHeaderContainer = () => (
    <div className="labelHeaderContainer">
        <LabelComponent id="candidateName" value="Anderson Milski"></LabelComponent>
        <LabelComponent id="testDescription" value=" Teste de Front-end"></LabelComponent>
        <span id="rectangle">
            <LabelComponent id="cbLabel" value="CB"></LabelComponent>
        </span>
    </div>
)
export default LabelHeaderContainer