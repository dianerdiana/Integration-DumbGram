import React from 'react';
import { Modal, Button, Container, Row, Col, Image } from 'react-bootstrap'
import style from "./Login.module.css"

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
            <Col md={8} style={{ height: "90vh"}}>
              <Image src="/images/large.jpg" style={{width: "100%", height: "100%", objectFit: "cover", borderRadius: "5px"}}/>
            </Col>
            <Col md={4}>
              <div>
                <button>X</button>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

function DetailFeed() {
  const [detailFeed, setDetailFeed] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setDetailFeed(true)}>
        Launch vertically centered modal
      </Button>

      <Detail
        show={detailFeed}
        onHide={() => setDetailFeed(false)}
      />
    </>
  );
}

export default DetailFeed