import React from 'react'

export const RowComponent = (props) => (
    <div className={props.className}>
        {props.content}
    </div>
)
export default RowComponent