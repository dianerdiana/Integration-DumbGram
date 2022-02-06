import React, { useEffect } from "react"
import { Modal, Container, Row, Col, Image, Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom";

import { API } from "../../config/api"

import { useState, useContext } from 'react';
import { UserContext } from '../../context/userContext';

import style from "./FeedCard.module.css"

function FeedCard (props) {

  const [detailFeed, setDetailFeed] = React.useState(false);

  const dataUser = props.item.uploader

  const {fullName, id, image} = dataUser

  const firstName = fullName.split(" ")[0]

  return (
      <div>
        <Image src={props.item.fileName} style={{display: "flex", width: "100%", borderRadius: "5px"}}/>
        <div style={{display: "flex", margin: "10px 0"}}>
          <div>
            <Link to={"/user/"+id} style={{textDecoration: "none"}}>
              <Image src={image} style={{width: "24px"}}/>
              <span style={{marginLeft: "5px", color: "#ABABAB"}}>{firstName}</span>
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
              detailFeed = {props.item}
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

  const navigate = useNavigate()

  const [state, dispatch] = useContext(UserContext);

  let feed= props.detailFeed

  const [ comments, setComments ] = useState();
  const [ form, setForm ] = useState({
    comment: "",
    feed_id: feed.id,
    user_id: state.user.id
  })

  const getComments = async(feedId) => {
    try {

      const response = await API.get("/comments/" + feedId)
      
      setComments(response.data.data.comments)

    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async(e) => {
    try {

      e.preventDefault();

      if(e.key === "Enter") {

       setForm({
          feed_id: form?.feed_id,
          comment: form?.comment,
          user_id: form?.user_id
        })
      }
      
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };

      const body = JSON.stringify(form);

      const response = await API.post("/comment", body, config)

      console.log(response.data)

      if(response.status == "Success") {
        navigate("/feed")
      }
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getComments(feed.id)
  }, []);

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
              <Image src={feed.fileName} style={{width: "100%", height: "100%", objectFit: "cover", borderRadius: "5px"}}/>
            </Col>
            <Col md={4}>
              <div>
                <button>
                  X
                </button>
              </div>
              <div style={{display: "flex", flexDirection: "column", borderBottom: "1px #ABABAB solid", marginRight: "20px", padding: "20px 0px"}}>
                <div>
                  <Image src={feed.uploader.image} style={{width: "30px", height: "30px", borderRadius: "50%"}}/>
                  <span style={{color: "white", marginLeft: "10px"}}>{feed.uploader.fullName}</span>
                </div>
                <div style={{marginLeft: "15px", color: "#FFFFFF", flexWrap: "wrap"}}>
                  <div style={{color: "#ABABAB", marginLeft: "25px"}}>{feed.caption}</div>
                </div>
              </div>
              <div style={{ height: "400px", overflow: "auto" }}>
                {comments?.map((item) => {
                    return(
                      <div key={item.id} style={{display: "flex", flexDirection: "column", marginRight: "20px", marginTop: "20px"}}>
                        <div>
                          <Image src={"http://localhost:5000/uploads/" + item.commentor.image} style={{width: "30px", height: "30px", borderRadius: "50%"}}/>
                          <span style={{color: "white", marginLeft: "10px"}}>{item.commentor.fullName}</span>
                        </div>
                        <div style={{marginLeft: "15px", color: "#FFFFFF", flexWrap: "wrap"}}>
                          <div style={{color: "#ABABAB", marginLeft: "25px"}}>{item.comment}</div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
              <div>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3 input-comment" controlId="exampleForm.ControlInput1">
                    <Form.Control style={{
                        width: "94%",
                        backgroundColor: "#5C5C5C",
                        color: "#FFFFFF"
                      }} 
                      type="text"
                      name="comment"
                      value={form.comment}
                      onChange={handleChange}
                      placeholder="Comment..." />
                  </Form.Group>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default FeedCard