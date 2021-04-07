import * as React from "react";
import { Link } from 'react-router-dom';

type Props = {
    post:IArticle
    extract?: Boolean
}

export const Post:React.FC<Props> = ({post}) => (
    <article className={"post"}>
        <h1>{post.title}</h1>
        <p>{post.body.substring(0, 100)}</p>

        {<Link to={`/posts/${post.id}`} className="button">
                View Post
        </Link>
        }
        

    </article>
)
