import { Image } from "react-bootstrap"

function MessagesCard (props) {
  return (
    <>
      {props.data.map((user) => {
        return (
          <>
            <div style={{display: "flex", marginBottom: "40px", alignItems: "center"}}>
              <div>
                <Image src={user.image} style={{width: "60px", height: "60px", borderRadius: "50%"}}/>
              </div>
              <div style={{marginLeft: "20px", color: "#FFFFFF", flexWrap: "wrap"}} key={user.name}>
                <div style={{marginBottom: "3px"}}>{user.name}</div>
                <div style={{color: "#ABABAB"}}>{user.message}</div>
              </div>
            </div>
          </>
        )
      })}
    </>
  )
}

export default MessagesCard