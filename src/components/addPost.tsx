import * as React from "react";

type AddPostProps = {
    addPost: (post:IArticle | any) => void
};

export const AddPost= ({addPost}:AddPostProps) => {
    const [post, setPost] = React.useState<IArticle | {}>();


    const handleArticleData = (e:React.FormEvent<HTMLInputElement>) => {
        setPost({
            ...post,
            [e.currentTarget.id]: e.currentTarget.value
        });
    };

    const addNewPost = (e:React.FormEvent) => {
        e.preventDefault();
        addPost(post)
    };

    return (
        <form onSubmit={addNewPost} className="Add-article">
            <input
                type="text"
                id="title"
                placeholder="Title"
                onChange={handleArticleData}
            />

            <input
                type="text"
                id="description"
                placeholder="Description"
                onChange={handleArticleData}
            />
            <button disabled={post === undefined ? true : false}>
                Add Post
            </button>
        </form>
    );
}