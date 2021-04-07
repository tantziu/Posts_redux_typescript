import * as React from "react";

type Props = {
    post:IArticle
    extract?: Boolean
}

export const SinglePost:React.FC<Props> = ({post}) => (
    <article className={"post-extract"}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
    </article>
)
