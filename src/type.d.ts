type IArticle = {
    id: number,
    title:string,
    body: string
};

type PostsAction = {
    type?: string,
    payload?: IArticle[]
};

type PostAction = {
    type?: string,
    payload?: IArticle
};

type PostsState = {
    data: IArticle[],
    loading?: Boolean,
    hasErrors?: Boolean
};

type  PostState = {
    item: IArticle,
    loading?: Boolean,
    hasErrors?: Boolean
};

type ApplicationState = {
    posts: PostsState,
    // post: PostState
    // comments: CommentsState
}
