import React, {useEffect} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import {Post} from '../components/Post'
import {fetchPosts, addPost} from '../actions/postsActions'
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { useAppSelector, useAppDispatch } from '../app/hooks'
import {AddPost} from '../components/AddPost'
// import { renderIntoDocument } from 'react-dom/test-utils';

// type PostsPageProps = {
//     posts: IArticle[];
//     hasErrors: boolean;
//     loading: boolean;
    // fetchPosts: () => any;
//     addPost: (post:any) => any;
// }

const PostsPage = ()/*({loading, hasErrors/*, fetchPosts}:PostsPageProps)*/ => {
    const dispatch:ThunkDispatch<any, any, AnyAction> = useAppDispatch()
    const data = useAppSelector(state => state.posts.data)
    const loading = useAppSelector(state => state.posts.loading)
    const hasErrors = useAppSelector(state => state.posts.hasErrors)

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])
    
    const renderPosts = () => {
        if (loading) return <p>Loading posts...</p>
        if (hasErrors) return <p>Unable to display posts/</p>
        return data.map(post => <Post key={post.id} post={post} extract/>)
    }

    const savePost = React.useCallback((article:IArticle) =>
        addPost(article),
        []
    )
    return (
        <section>
            <h1>Posts</h1>
            <AddPost addPost={savePost} />
             {renderPosts()}  
        </section>
    )
};

const mapStateToProps = (state:any) => ({
    posts: state.posts.data,
    loading: state.posts.loading,
    hasErrors: state.posts.hasErrors,
})

// const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => ({
//       fetchPosts: () => dispatch(fetchPosts()),
//       addPost: (post:any) => dispatch(addPost(post)),
// });

export default connect(mapStateToProps/*, mapDispatchToProps*/)(PostsPage)