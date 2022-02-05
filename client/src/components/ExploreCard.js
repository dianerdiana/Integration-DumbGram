import React from "react"
import {Image} from "react-bootstrap"

function ExploreCard (props) {

  return (
    <div>
      <Image src={props.item.fileName} style={{display: "flex", width: "100%", borderRadius: "8px"}}/>
    </div>
  )
}

export default ExploreCard