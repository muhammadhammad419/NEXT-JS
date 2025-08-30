import React from 'react'

const page = ({params}) => {
  return (
    <div>
        <p>Username: {params.username}</p>
    </div>
  )
}

export default page;