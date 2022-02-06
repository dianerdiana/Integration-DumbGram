import { Container, Row, Col } from "react-bootstrap"
import { useState, useContext, useEffect } from "react"
import { UserContext } from '../context/userContext';

import { API } from '../config/api'
import { useParams } from "react-router-dom";

import Masonry from "react-masonry-css"
import FeedCard from "../components/feed-card/FeedCard"
import Navbar from "../components/navbar/Navbar"
import ProFeed from "../components/proFeed/ProFeed"

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

function Feed() {

  const [state, dispatch] = useContext(UserContext)

  let { id } = useParams()
  id = state.user.id

  const [ feeds, setFeeds ] = useState([])
  const [ followers, setFollowers ] = useState(0)
  const [ following, setFollowing ] = useState(0)
  const [ userFeeds, setUserFeeds ] = useState(0)

  const getFollowedFeed = async (id) => {
    try {
      
      const response = await API.get("/feed/" + id)

      setFeeds(response.data.data.feed)

    } catch (error) {
      console.log(error)
    }
  }

  const getFollowersCount = async (userId) => {
    try {
      
      const response = await API.get("/followers-count/" + userId)

      setFollowers(response.data.data.followers)

    } catch (error) {
      console.log(error)
    }
  }

  const getFollowingCount = async (userId) => {
    try {
      
      const response = await API.get("/following-count/" + userId)

      setFollowing(response.data.data.following)

    } catch (error) {
      console.log(error)
    }
  }

  const countUserFeeds = async (userId) => {
    try {
      
      const response = await API.get("/count-feeds/" + userId)

      setUserFeeds(response.data.data.feed)

    } catch (error) {
      console.log(error)
    }
  }

  const dataUser = {
    ...state.user,
    followers,
    following,
    userFeeds
  }

  useEffect(() => {
    getFollowedFeed(id);
    getFollowersCount(id);
    getFollowingCount(id);
    countUserFeeds(id);
  }, []);

  return (
    <Container fluid style={{height: "95vh" }}>
      <Row style={{flexDirection: "row"}}>
        <Col md="3">

          <ProFeed dataProfile={dataUser}/>

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
              <h3>Feed</h3>
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
    </Container>
  )
}

export default Feed;