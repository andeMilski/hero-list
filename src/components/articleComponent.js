import React from 'react'
export const ArticleComponent = (props) => (
    <article className={props.className}>{props.content}</article>
)
export default ArticleComponent