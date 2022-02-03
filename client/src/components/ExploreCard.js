import React from "react"
import {Image} from "react-bootstrap"

function ExploreCard (props) {

  return (
    <div key={props.item.image}>
      <Image src={props.item.image} style={{display: "flex", width: "100%", borderRadius: "8px"}}/>
    </div>
  )
}

export default ExploreCard