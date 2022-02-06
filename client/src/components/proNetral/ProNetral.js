import { Image, Row, Col } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

import { UserContext } from "../../context/userContext";
import React, { useContext } from "react";

import style from './ProNetral.module.css'

export default function ProNetral(props) {

  const [state, dispatch] = useContext(UserContext);

  let navigate = useNavigate()

  const logout = () => {
    console.log(state);
    dispatch({
      type: "LOGOUT",
    });
    navigate("/");
  };

  const user = props.dataUser

  const {
    image, 
    fullName, 
    username, 
    bio, 
    followers, 
    following, 
    userFeeds
  } = user

  return(
    <Row className={style.leftFeed}>
      <Col>
      <Col style={{paddingLeft: "0", height: "30px"}}>
        <Image src="/icons/DumbGramGroup.svg" className={style.appTitle}/>
      </Col>
        <Row className={style.feedProfile}>
          <div className={style.profileImageWrap} mb={5}>
            <Image src={"http://localhost:5000/uploads/" + image} className={style.profileImage} />
          </div>
          <div className={style.profileNameUser} mb={5}>
            <h5 className={style.profileName}>{fullName}</h5>
            <p className={style.profileUserName}>@{username}</p>
          </div>
          <div className={style.profileState}>
            <div className={style.profilePost}>
              <span className={style.stateTitle}>Posts</span>
              <span className={style.stateValue}>{userFeeds}</span>
            </div>
            <div className={style.profileFollowers}>
              <span className={style.stateTitle}>Followers</span>
              <span className={style.stateValue}>{followers}</span>
            </div>
            <div className={style.profileFollow}>
              <span className={style.stateTitle}>Following</span>
              <span className={style.stateValue}>{following}</span>
            </div>
          </div>
          <div className={style.profileDesc}>
            <span className={style.profileDescText}>{bio}</span>
          </div>
        </Row>
        <Row className={style.linkFeedExplore}>
          <Col className={style.linkFeed}>
            <Link to="/feed">
              <Image src="/icons/home-unactive.svg"/>
              <span>Feed</span>
            </Link>
          </Col>
          <Col className={style.linkExplore}>
            <Link to="/explore">
              <Image src="/icons/explore-unactive.svg"/>
              <span>Explore</span>
            </Link>
          </Col>
        </Row>
        <Row style={{ paddingTop: "15px"}}>
          <Col className={style.btnGroup}>
            <button onClick={logout} className={style.btnLogout}>
              <Image src="/icons/logout-icon.svg"/>
              <span>Logout</span>
            </button>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}