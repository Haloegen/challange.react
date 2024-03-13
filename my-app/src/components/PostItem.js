import React from 'react'
import css from './css/Content.module.css'

function PostItem(props) {
  const savedPosts = props.savedPosts
  return (
    savedPosts.map(post => {
      const {name, title, description, image} = post
      return (
        <div className={css.SearchItem} key={title}>
          <p>{title}</p>
          <p>{name}</p>
          <img src={image}></img>
          <p>{description}</p> 
           </div>
)}))
}

  


export default PostItem