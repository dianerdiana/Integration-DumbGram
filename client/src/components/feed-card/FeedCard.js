import React from "react"
import { Modal, Container, Row, Col, Image } from 'react-bootstrap'
import { Link } from "react-router-dom";
import style from "./FeedCard.module.css"

function FeedCard (props) {

  const [detailFeed, setDetailFeed] = React.useState(false);

  return (
      <div>
        <Image src={props.item.image} style={{display: "flex", width: "100%", borderRadius: "5px"}}/>
        <div style={{display: "flex", margin: "10px 0"}}>
          <div>
            <Link to="/profile" style={{textDecoration: "none"}}>
              <Image src="/images/zayn.png" style={{width: "24px"}}/>
              <span style={{marginLeft: "5px", color: "#ABABAB"}}>{props.item.name}</span>
            </Link>
          </div>
          <div style={{display: "flex", justifyContent: "space-between", marginLeft: "auto", width: "30%"}}>
            <button className={style.btnLike}>
              <Image src="/icons/like-icon.svg" style={{width: "16px"}}/>
            </button>
            <button className={style.btnComment} onClick={() => setDetailFeed(true)}>
              <Image src="/icons/comment-icon.svg" style={{width: "16px", cursor:  "pointer"}}/>
            </button>

            <Detail
              show={detailFeed}
              onHide={() => setDetailFeed(false)}
            />

            <Link to="/messages">
              <Image src="/icons/paper-plane.svg" style={{width: "16px"}}/>
            </Link>
          </div>
        </div>
        <div style={{textAlign: "right", fontSize: "14px", color: "#ABABAB"}}>
          {props.item.like} Like
        </div>
      </div>
  )
}

function Detail(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      contentClassName={style.customContentStyle}
      centered
    >
      <Modal.Body style={{padding: "0"}}>
        <Container style={{padding: "0"}}>
          <Row>
            <Col md={8} style={{overflowY: "hidden", height: "90vh"}}>
              <Image src="/images/large.jpg" style={{width: "100%", height: "100%", objectFit: "cover", borderRadius: "5px"}}/>
            </Col>
            <Col md={4}>
              <div>
                <button>
                  X
                </button>
              </div>
              <div style={{display: "flex", flexDirection: "column", borderBottom: "1px #ABABAB solid", marginRight: "20px", padding: "20px 0px"}}>
                <div>
                  <Image src="/images/zayn.png" style={{width: "30px", height: "30px", borderRadius: "50%"}}/>
                  <span style={{color: "white", marginLeft: "10px"}}>zayn</span>
                </div>
                <div style={{marginLeft: "15px", color: "#FFFFFF", flexWrap: "wrap"}}>
                  <div style={{color: "#ABABAB", marginLeft: "25px"}}>To Begin Again ...</div>
                </div>
              </div>
              <div style={{display: "flex", flexDirection: "column", marginRight: "20px", marginTop: "20px"}}>
                <div>
                  <Image src="/icons/abdul.png" style={{width: "30px", height: "30px", borderRadius: "50%"}}/>
                  <span style={{color: "white", marginLeft: "10px"}}>abdul_h</span>
                </div>
                <div style={{marginLeft: "15px", color: "#FFFFFF", flexWrap: "wrap"}}>
                  <div style={{color: "#ABABAB", marginLeft: "25px"}}>Nice Place</div>
                </div>
              </div>
              <div style={{display: "flex", flexDirection: "column", marginRight: "20px", marginTop: "20px"}}>
                <div>
                  <Image src="/images/egi.png" style={{width: "30px", height: "30px", borderRadius: "50%"}}/>
                  <span style={{color: "white", marginLeft: "10px"}}>egi_lol</span>
                </div>
                <div style={{marginLeft: "15px", color: "#FFFFFF", flexWrap: "wrap"}}>
                  <div style={{color: "#ABABAB", marginLeft: "25px"}}>Good Vibe</div>
                </div>
              </div>
              <div>

              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default FeedCard