import React from 'react'
import { BtnContainer } from '../../assets/StyledComponent/BtnBackStyled'
import { Link } from "react-router-dom";

const BtnBack = () => {
  return (
    <>
    
<BtnContainer class="btn">
    <Link to="/" style={{textAlign:"none"}}>
<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 11L6.414 11 11.707 5.707 10.293 4.293 2.586 12 10.293 19.707 11.707 18.293 6.414 13 21 13z"></path></svg>
</Link>
</BtnContainer>
    </>
  )
}

export default BtnBack