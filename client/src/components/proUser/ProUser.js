import { Row, Col, Image } from 'react-bootstrap'
import style from './ProUser.module.css'
import { Link } from 'react-router-dom'


export default function ProUser() {
  return (
    <Row className={style.leftFeed}>
      <Col>
      <Col style={{paddingLeft: "0", height: "30px"}}>
        <Image src="/icons/DumbGramGroup.svg" className={style.appTitle}/>
      </Col>
        <Row className={style.feedProfile}>
          <div className={style.profileImageWrap} mb={5}>
            <Image src="/images/zayn-unborder.jpg" className={style.profileImage} />
          </div>
          <div className={style.profileNameUser} mb={5}>
            <h5 className={style.profileName}>Zayn Malik</h5>
            <p className={style.profileUserName}>@zayn</p>
          </div>
          <div className={style.btnAction}>
            <button className={style.btnMessage}>Message</button>
            <button className={style.btnUnfollow}>Unfollow</button>
          </div>
          <div className={style.profileState}>
            <div className={style.profilePost}>
              <span className={style.stateTitle}>Posts</span>
              <span className={style.stateValue}>143</span>
            </div>
            <div className={style.profileFollowers}>
              <span className={style.stateTitle}>Followers</span>
              <span className={style.stateValue}>40.5 M</span>
            </div>
            <div className={style.profileFollow}>
              <span className={style.stateTitle}>Following</span>
              <span className={style.stateValue}>28</span>
            </div>
          </div>
          <div className={style.profileDesc}>
            <span className={style.profileDescText}>Nobody is Listening Out Now! www.inzayn.com</span>
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
            <Link to="/" className={style.btnLogout}>
              <Image src="/icons/logout-icon.svg"/>
              <span>Logout</span>
            </Link>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}