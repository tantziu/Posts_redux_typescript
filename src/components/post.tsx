import * as React from "react";
import { Link } from 'react-router-dom';

type Props = {
    post:IArticle
    extract?: Boolean
}

export const Post = ({post, extract}:Props) => (
    <article className={extract ? "post-excerpt" : "post"}>
        <h1>{post.title}</h1>
        <p>{extract ? post.body.substring(0, 100) : post.body}</p>

        {extract && <Link to={`/posts/${post.id}`} className="button">
                View Post
        </Link>
        }
    </article>
)
