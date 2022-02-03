import { Container, Row, Col } from "react-bootstrap"
import EditForm from "../components/form/EditForm"
import ProNetral from "../components/proNetral/ProNetral"
import Navbar from "../components/navbar/Navbar"


function EditProfile() {

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

  return (
    <Container fluid style={{height: "95vh" }}>
      <Row style={{flexDirection: "row"}}>
        <Col md="3">

          <ProNetral />

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

          <Row className="right-side">
            
            <Navbar content={content}/>

            <Col className="right-title">
              <h3>Edit Profile</h3>
            </Col>

            <Row className="right-content">
              <EditForm />
            </Row>
          </Row>

        </Col>
      </Row>
    </Container>
  )
}

export default EditProfile;