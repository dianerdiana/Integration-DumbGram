import { Modal, Form } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'
import style from "./Login.module.css"

function Login(props) {
  
  const navigate = useNavigate()

  const login = () => {
    navigate("/feed")
  }

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      dialogClassName={style.customDialogStyle}
      contentClassName={style.customContentStyle}
      centered>
        <Modal.Body className={style.modalBody}>
        <Form className={style.form}>

          <h2 className={style.formTitle}>Login</h2>

          <Form.Group controlId="email" className={style.inputGroup}>
            <Form.Control 
              type="email" 
              placeholder="Email"
              name="email"
              className={style.formInput}/>
          </Form.Group>

          <Form.Group controlId="password" className={style.inputGroup}>
            <Form.Control 
              type="password" 
              name="password"
              placeholder="Password"
              className={style.formInput}/>
          </Form.Group>

          <Form.Group className={style.btnGroup}>
            <button onClick={login} className={style.btnLogin}>Login</button>
          </Form.Group>

        </Form>
        <p className={style.loginDesc}>Don't have an account ? Klik <Link to="/register" 
          style={{textDecoration: "none", color: "#B1B1B1", fontWeight: "bold"}}>
            Here
          </Link>
        </p>
        </Modal.Body>
    </Modal>
  );
}

export default Login