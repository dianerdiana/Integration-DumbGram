import { Container, Row, Col } from "react-bootstrap"
import { useState, useContext, useEffect } from "react"
import { UserContext } from '../context/userContext';

import { API } from '../config/api'
import { useParams } from "react-router-dom";

import Masonry from "react-masonry-css"
import FeedCard from "../components/feed-card/FeedCard"
import ProUser from "../components/proUser/ProUser"
import Navbar from "../components/navbar/Navbar"

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

  const [state, dispatch] = useContext(UserContext)

  let { id } = useParams()

  id = state.user.id

  const [ feeds, setFeeds ] = useState([])

  console.log(feeds)

  const getFollowedFeed = async (id) => {
    try {
      
      const response = await API.get("/feed/" + id)

      setFeeds(response.data.data.feed)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getFollowedFeed(id)
  }, []);

  return (
    <Container fluid style={{height: "95vh" }}>
      <Row style={{flexDirection: "row"}}>
        <Col md="3">

          <ProUser />

        </Col>

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
                {feeds?.map((item) => {
                  return(
                    <FeedCard item={item} key={item.id}></FeedCard>
                  )
                })}
              </Masonry>
            </div>
          </Row>

        </Col>
      </Row>

      <div style={{
            borderLeft: "1px solid #6A6A6A4D",
            height: "100vh",
            width: "0px",
            position: "absolute",
            left: "28%",
            top: "0"
          }}>
        </div>
    </Container>
  )
}

export default Profile;