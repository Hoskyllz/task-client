import React from 'react'

const Tags = ({Tag}) => {
  return (
    <div>


    <div className="parent-container">
      <div className="d-flex justify-content-between text-secondary">
        <p>Tag</p>
        <p>{Tag} </p>
      </div>
      <div className="parent">
        <div
          className={Tag === urgent ? "red" : "green"}
          style={{
            width: `${num}%`,
          }}
        ></div>
      </div>
    </div>

    </div>
  )
}

export default Tags