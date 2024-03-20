import React from 'react'
import {savedPosts} from "../posts.json"
import css from './css/Loader.module.css'
import PostItem from './PostItem'

function Loader(props) {
  if (props.isLoaded)
  return (
    <PostItem savedPosts={savedPosts} />
  )
  else {
    return (
      <div className={css.Loader}>Loader</div>
    )
  }
}

export default Loader