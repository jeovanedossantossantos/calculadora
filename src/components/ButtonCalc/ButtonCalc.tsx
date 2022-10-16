import React from "react";


import { ButtonCalcProps } from "./ButtonCalc.interface";
import { ButtonContainer, ButtonText } from "./ButtonCalc.styled";


const ButtonCalc = ({ operation, double, triple, label, clickAction }: ButtonCalcProps) => {


    let classes = 'button '
    classes += operation ? 'operation' : ''
    classes += double ? 'double' : ''
    classes += triple ? 'triple' : ''

    return (

        <ButtonContainer onPress={clickAction} >
            <ButtonText>{label}</ButtonText>
        </ButtonContainer>

    )
}

export default ButtonCalc