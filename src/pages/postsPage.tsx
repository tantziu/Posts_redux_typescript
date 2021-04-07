import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Post} from '../components/post'
import {fetchPosts, addPost} from '../actions/postsActions'
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import {AddPost} from '../components/addPost'
// import { renderIntoDocument } from 'react-dom/test-utils';

type Props = {
    posts: IArticle[]
} 

interface PropsFromState {
    posts: IArticle[];
    hasErrors: boolean;
    loading: boolean;
}

interface propsFromDispatch {
    fetchPosts: () => any;
    addPost: (post:any) => any;
}

type AllProps = PropsFromState & propsFromDispatch;

const PostsPage = ({posts, loading, hasErrors, fetchPosts}:AllProps) => {
    useEffect(() => {
        fetchPosts()
    }, [])
    
    const renderPosts = () => {
        if (loading) return <p>Loading posts...</p>
        if (hasErrors) return <p>Unable to display posts/</p>
        return posts.map(post => <Post key={post.id} post={post} extract/>)
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

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => ({
      fetchPosts: () => dispatch(fetchPosts()),
      addPost: (post:any) => dispatch(addPost(post)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage)