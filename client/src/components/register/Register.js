import { Link } from 'react-router-dom'
import { Modal, Form } from "react-bootstrap";
import style from "./Register.module.css"

function Register(props) {
  

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      dialogClassName={style.customDialogStyle}
      contentClassName={style.customContentStyle}
      centered>
        <Modal.Body className={style.modalBody}>
        <Form className={style.form}>

          <h2 className={style.formTitle}>Register</h2>

          <Form.Group controlId="email" className={style.inputGroup}>
            <Form.Control 
              type="email" 
              name="email"
              placeholder="Email" 
              className={style.formInput}/>
          </Form.Group>

          <Form.Group controlId="name" className={style.inputGroup}>
            <Form.Control 
              type="text" 
              name="name"
              placeholder="Name" 
              className={style.formInput}/>
          </Form.Group>

          <Form.Group controlId="username" className={style.inputGroup}>
            <Form.Control 
              type="text" 
              name="username"
              placeholder="Username" 
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
            <button className={style.btnRegister}>Register</button>
          </Form.Group>

        </Form>
        <p className={style.loginDesc}>Already have an account ? Klik <Link to="/login" style={{textDecoration: "none", color: "#B1B1B1", fontWeight: "bold"}}>Here</Link></p>
        </Modal.Body>
    </Modal>
  );
}

export default Register