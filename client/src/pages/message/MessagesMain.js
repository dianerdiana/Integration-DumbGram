import { Container, Row, Col, Image } from "react-bootstrap"
import style from "./MessagesMain.module.css"
import MessagesCard from "../../components/MessagesCard"
import Navbar from "../../components/navbar/Navbar"



const users = [
  {
    image: "/images/Rectangle-2.png",
    name: "egi_lol",
    message: "Hello Lisa"
  },
  {
    image: "/images/Rectangle-5.png",
    name: "beach_lover",
    message: "Hello Lisa, when do you go to the beach"
  }
]

const content = [
  {
    id: 1,
    name: "abdul_h",
    comment: "Nice Place",
    image: "/icons/abdul.png"
  },
  {
    id: 2,
    name: "egi_lol",
    comment: "Good Vibe",
    image: "/images/egi.png"
  }
]

function MessagesMain() {
  return (
    <Container fluid style={{height: "95vh" }}>
      <Row style={{flexDirection: "row"}}>
        <Col md="3">

          <Row className={style.leftFeed}>
            <Col>
              <Col style={{paddingLeft: "0", height: "80px"}}>
                <Image src="/icons/DumbGramGroup.svg" className={style.appTitle}/>
              </Col>
              <Col>
                <MessagesCard data={users}/>
              </Col>
            </Col>
          </Row>

        </Col>

        <div style={{
          borderLeft: "1px solid #6A6A6A4D",
          height: "100vh",
          width: "0px",
          position: "absolute",
          left: "28%",
          top: "0"
        }}></div>

        <Col md="8" style={{marginLeft: "80px"}}>

          <Row className={style.rightSide}>

            <Navbar content={content}/>

            <div style={{height: "80vh", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "24px", color: "#FFFFFF"}}>
              <div>
                No Messages
              </div>
            </div>

            
          </Row>

        </Col>
      </Row>
    </Container>
  )
}

export default MessagesMain