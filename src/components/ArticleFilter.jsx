import React from 'react'

function ArticleFilter(props) {
  return (
    <section class="article me-3 w3-animate-right">
        {props.children}
    </section>
  )
}

export default ArticleFilter