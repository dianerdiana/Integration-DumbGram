import { Container, Row, Col } from "react-bootstrap"
import { useState, useContext, useEffect } from "react"
import { UserContext } from '../context/userContext';

import { API } from '../config/api'
import { useParams } from "react-router-dom";

import Masonry from "react-masonry-css"
import UserFeedCard from "../components/user-feed-card/UserFeedCard";
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

  const params = useParams()
  const userId = params.id

  const [ feeds, setFeeds ] = useState([]);
  const [ dataUser, setDataUser ] = useState();
  const [ followers, setFollowers ] = useState(0);
  const [ following, setFollowing ] = useState(0);
  const [ userFeeds, setUserFeeds ] = useState(0);

  console.log(dataUser)

  const getUser = async (userId) => {
    try {
      
      const response = await API.get("/user/" + userId)
      let dataUser = response.data.data.user[0]

      setDataUser(dataUser)

    } catch (error) {
      console.log(error)
    }
  }

  const getFollowersCount = async (id) => {
    try {
      
      const response = await API.get("/followers-count/" + id)

      setFollowers(response.data.data.followers)

    } catch (error) {
      console.log(error)
    }
  }

  const getFollowingCount = async (id) => {
    try {
      
      const response = await API.get("/following-count/" + id)

      setFollowing(response.data.data.following)

    } catch (error) {
      console.log(error)
    }
  }

  const countUserFeeds = async (id) => {
    try {
      
      const response = await API.get("/count-feeds/" + id)

      setUserFeeds(response.data.data.feed)

    } catch (error) {
      console.log(error)
    }
  }

  let user = {
    ...dataUser,
  followers,
  following,
  userFeeds
}

  let firstName = dataUser?.fullName.split(" ")[0]

  const getFeedsUser = async (userId) => {
    try {
      
      const response = await API.get("/feeds-user/" + userId)

      setFeeds(response.data.data.feed)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getFeedsUser(userId);
    getUser(userId);
    getFollowersCount(userId);
    getFollowingCount(userId);
    countUserFeeds(userId)
  }, []);

  return (
    <Container fluid style={{height: "95vh" }}>
      <Row style={{flexDirection: "row"}}>
        <Col md="3">

          <ProUser dataUser={user}/>

        </Col>

        <Col md="8" style={{marginLeft: "80px"}}>

          <Row className="right-side">

            <Navbar content={content}/>

            <Col className="right-title">
              <h3>{firstName}, Feed</h3>
            </Col>

            <div className="right-content">
              <Masonry
              breakpointCols={3}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid-column">
                {feeds?.map((item) => {
                  return(
                    <UserFeedCard item={item} key={item.id}></UserFeedCard>
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