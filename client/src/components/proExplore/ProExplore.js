import { Image, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import style from './ProExplore.module.css'

export default function FeedProfile() {
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
            <Image src="/images/Rectangle-6.png" className={style.profileImage} />
          </div>
          <div className={style.profileNameUser} mb={5}>
            <h5 className={style.profileName}>Lisa</h5>
            <p className={style.profileUserName}>@lalalisa_m</p>
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
            <span className={style.profileDescText}>Rapper in Black Pink, Brand Ambasador Penshoppe</span>
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