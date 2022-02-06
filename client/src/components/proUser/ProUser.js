import { Row, Col, Image } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

import { UserContext } from "../../context/userContext";
import React, { useContext } from "react";

import style from './ProUser.module.css'


export default function ProUser(props) {

  let navigate = useNavigate()

  const [state, dispatch] = useContext(UserContext);

  const logout = () => {
    console.log(state);
    dispatch({
      type: "LOGOUT",
    });
    navigate("/");
  };

  const user = props.dataUser;
  let { image, fullName, bio, username, followers, following, userFeeds } = user

  return (
    <Row className={style.leftFeed}>
      <Col>
      <Col style={{paddingLeft: "0", height: "30px"}}>
        <Image src="/icons/DumbGramGroup.svg" className={style.appTitle}/>
      </Col>
        <Row className={style.feedProfile}>
          <div className={style.profileImageWrap} mb={5}>
            <Image src={image} className={style.profileImage} />
          </div>
          <div className={style.profileNameUser} mb={5}>
            <h5 className={style.profileName}>{fullName}</h5>
            <p className={style.profileUserName}>@{username}</p>
          </div>
          <div className={style.btnAction}>
            <button className={style.btnMessage}>Message</button>
            <button className={style.btnUnfollow}>Unfollow</button>
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
              <Image src="/icons/home-active.svg"/>
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