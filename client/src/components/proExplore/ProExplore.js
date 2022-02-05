import { Image, Row, Col } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import style from './ProExplore.module.css'

import { UserContext } from "../../context/userContext";
import React, { useContext } from "react";


export default function FeedProfile() {

  let navigate = useNavigate()

  const [state, dispatch] = useContext(UserContext);

  const logout = () => {
    console.log(state);
    dispatch({
      type: "LOGOUT",
    });
    navigate("/");
  };

  const user = state.user


  return(
    <Row className={style.leftFeed}>
      <Col>
      <Col style={{paddingLeft: "0", height: "30px"}}>
        <Image src="/icons/DumbGramGroup.svg" className={style.appTitle}/>
      </Col>
        <Row className={style.feedProfile}>
          <div className={style.editBtn}>
            <Link to="/edit-profile" >
              <Image src="/icons/edit-icon.svg" className={style.editBtnIcon}/>
            </Link>
          </div>
          <div className={style.profileImageWrap} mb={5}>
            <Image src={user.image} className={style.profileImage} />
          </div>
          <div className={style.profileNameUser} mb={5}>
            <h5 className={style.profileName}>{user.fullName}</h5>
            <p className={style.profileUserName}>@{user.username}</p>
          </div>
          <div className={style.profileState}>
            <div className={style.profilePost}>
              <span className={style.stateTitle}>Posts</span>
              <span className={style.stateValue}>200</span>
            </div>
            <div className={style.profileFollowers}>
              <span className={style.stateTitle}>Followers</span>
              <span className={style.stateValue}>51.2 M</span>
            </div>
            <div className={style.profileFollow}>
              <span className={style.stateTitle}>Following</span>
              <span className={style.stateValue}>1</span>
            </div>
          </div>
          <div className={style.profileDesc}>
            <span className={style.profileDescText}>{user.bio}</span>
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
              <Image src="/icons/explore-active.svg"/>
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