import React from 'react'
export const NavComponent = (props) => (
    <nav className={props.className}>
        {props.content}
    </nav>
)
export default NavComponent