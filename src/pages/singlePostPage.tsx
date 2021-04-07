import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Post } from '../components/Post'
import {fetchPost} from '../actions/postActions'
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { RouteComponentProps } from 'react-router';
import { useAppSelector, useAppDispatch } from '../app/hooks'

interface PostParams  {
    id: string
}

interface SinglePostPageProps extends RouteComponentProps<PostParams> {
}

const SinglePostPage = ({match}: SinglePostPageProps) => {
    const { id } = match.params

    useEffect(() => {
        dispatch(fetchPost(id))
    }, [])

    const dispatch:ThunkDispatch<any, any, AnyAction> = useAppDispatch()
    const item = useAppSelector(state => state.post.item)
    const loading = useAppSelector(state => state.post.loading)
    const hasErrors = useAppSelector(state => state.post.hasErrors)
    
    

    const renderPost = () => {
        if (loading) return <p>Loading post...</p>
        if (hasErrors) return <p>Unable to display post.</p>
        return  <Post post={item}/>
    }
    return (
        <section>
            {renderPost()}
        </section>
    )
}

export default SinglePostPage
