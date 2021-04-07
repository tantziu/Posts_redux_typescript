import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { SinglePost } from '../components/singlePost'
import {fetchPost} from '../actions/postActions'

interface PropsFromState {
    post: IArticle;
    hasErrors: boolean;
    loading: boolean;
}

const SinglePostPage:React.FC<any> = ({
    match, 
    dispatch, 
    post, 
    loading, 
    hasErrors
}) => {
    useEffect(() => {
        const { id } = match.params;
        console.log("id: ", id)
        dispatch(fetchPost(id))
    }, [dispatch, match]

    )

    const renderPost = () => {
        if (loading) return <p>Loading post...</p>
        if (hasErrors) return <p>Unable to display post.</p>
        console.log("Post from page: ", post);
        return  <SinglePost post={post}/>
    }
    return (
        <section>
            {renderPost()}
        </section>
    )
}

const mapStateToProps = (state:any) => ({
    post: state.post.item,
    loading: state.post.loading,
    hasErrors: state.post.hasErrors
});

const mapDispatchToProps = (dispatch:any/*: ThunkDispatch<any, any, AnyAction>*/) => ({
    fetchPost:(id:number) => dispatch(fetchPost(id)),
});

export default connect(mapStateToProps)(SinglePostPage);
