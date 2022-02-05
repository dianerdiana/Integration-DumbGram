import { Container, Row, Col, Image } from "react-bootstrap"
import { useState } from "react"

import style from "./Landing.module.css"
import Masonry from "../../components/Masonry"
import Login from "../../components/login/Login"
import Register from "../../components/register/Register"


const gridImage = [
  {image: "/images/Rectangle-1.png"},
  {image: "/images/Rectangle-2.png"},
  {image: "/images/Rectangle-3.png"},
  {image: "/images/Rectangle-4.png"},
  {image: "/images/Rectangle-5.png"},
  {image: "/images/Rectangle-6.png"},
  {image: "/images/Rectangle-7.png"},
  {image: "/images/Rectangle-8.png"}
]

function Landing() {

  let title = "Homepage"
  document.title = "DumbGram | " + title

  const [ loginModal, setLoginModal ] = useState(false)
  const [ registerModal, setRegisterModal ] = useState(false)

  return (
      <Container >
        <Row>
          <Col className={style.appDesc} md={5}>
            <div className={style.appName}>
              <Image src="/icons/DumbGramGroup.svg" />
            </div>
            <div className={style.appTitle}>
              <h2>Share your best photos or videos</h2>
            </div>
            <div className={style.textDesc}>
              <p>Join now, share your creations with another people and enjoy other creations.</p>
            </div>
            <div className={style.btnGroup}>
              <button onClick={() => setLoginModal(true)} className={style.btnLogin}>Login</button>
              <Login
              show={loginModal}
              onHide={() => setLoginModal(false)}
              />
              <button onClick={() => setRegisterModal(true)} className={style.btnRegister}>Register</button>
              <Register
              show={registerModal}
              onHide={() => setRegisterModal(false)}
              />
            </div>
          </Col>
          <Col md={7} className={style.imgGridGroup}>
            <Row className={style.gridGroup}>
              <Masonry gridImage={gridImage} columnCount="3" gap="6">
              </Masonry>
            </Row>
          </Col>
        </Row>
      </Container>
  )
}

export default Landing;