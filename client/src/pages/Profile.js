import { Container, Row, Col } from "react-bootstrap"
import Masonry from "react-masonry-css"
import FeedCard from "../components/feed-card/FeedCard"
import ProUser from "../components/proUser/ProUser"
import Navbar from "../components/navbar/Navbar"

const assets = [
  {
    name: "zayn",
    image: "/images/Rectangle-1.png",
    like: "126.100",
  },
  {
    name: "zayn",
    image: "/images/Rectangle-3.png",
    like: "156.290"
  },
  {
    name: "zayn",
    image: "/images/Rectangle-7.png",
    like: "136.000"}
  ,
  {
    name: "zayn",
    image: "/images/Rectangle-9.png",
    like: "136.000"
  },
  {
    name: "zayn",
    image: "/images/Rectangle-4.png",
    like: "136.000"
  },
  {
    name: "zayn",
    image: "/images/Rectangle-2.png",
    like: "136.000"
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


function Profile() {
  return (
    <Container fluid style={{height: "95vh" }}>
      <Row style={{flexDirection: "row"}}>
        <Col md="3">

          <ProUser />

        </Col>

        <div style={{
            borderLeft: "1px solid #6A6A6A4D",
            height: "100vh",
            width: "0px",
            position: "absolute",
            left: "28%",
            top: "0"
          }}>
        </div>

        <Col md="8" style={{marginLeft: "80px"}}>

          <Row className="right-side">

            <Navbar content={content}/>

            <Col className="right-title">
              <h3>Zayn, Feed</h3>
            </Col>

            <div className="right-content">
              <Masonry
              breakpointCols={3}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid-column">
                {assets.map((item, index) => {
                  return(
                    <FeedCard item={item} key={index}></FeedCard>
                  )
                })}
              </Masonry>
            </div>
          </Row>

        </Col>
      </Row>
    </Container>
  )
}

export default Profile;