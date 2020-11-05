import React from 'react'

export const FooterComponent = (props) => (
    <footer className={props.className}>
        {props.content}
    </footer>
)
export default FooterComponent