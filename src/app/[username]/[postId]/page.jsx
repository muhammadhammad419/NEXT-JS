import React from 'react'

const page = ({params}) => {
  return (
    <div>
        <p>Username: {params.username}</p>
        <p>Post ID: {params.postId}</p>
    </div>
  )
}

export default page;