import React from 'react'
import { Text } from '../../assets/StyledComponent/BigTitleStyled'



const BigTitlte = (props) => {
    return (
        <Text  top={props.top}  left={props.left}  right={props.right}>
            {props.text}
        </Text>
    )
}

export default BigTitlte
