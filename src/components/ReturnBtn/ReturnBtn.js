import React from 'react'
import { NavLink } from 'react-router-dom'

import { HomeBtn } from '../../assets/allSvgs/AllSvgs'

const ReturnBtn = () => {
  return (
    <>
    <NavLink to="/">
        <HomeBtn width={30} height={30} fill='currentColor' />
        </NavLink>
    </>
  )
}

export default ReturnBtn