import { Link, useNavigate } from 'react-router-dom'
import { Modal, Form, Alert } from "react-bootstrap";
import style from "./Register.module.css"

import { useState, useContext } from 'react';
import { UserContext } from '../../context/userContext';

import { API } from '../../config/api'

function Register(props) {

  let navigate = useNavigate()

  // const [state, dispatch] = useContext(UserContext);

  const [message, setMessage] = useState(null);
  
  const [form, setForm] = useState({
    email: "",
    fullName: "",
    username: "",
    password: "",
  });

  // console.log(form)

  const { email, fullName, username, password } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      // Create Configuration Content-type here ...
      // Content-type: application/json
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };

      // Convert form data to string here ...
      const body = JSON.stringify(form);

      // Insert data user to database here ...
      const response = await API.post('/register', body, config);

      console.log(response);

      // Notification
      if (response.data.status == 'success') {
        const alert = (
          <Alert variant="success" className="py-1">
            Success
          </Alert>
        );
        setMessage(alert);
      } else {
        const alert = (
          <Alert variant="danger" className="py-1">
            Failed
          </Alert>
        );
        setMessage(alert);
      }
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Failed
        </Alert>
      );
      setMessage(alert);
      console.log(error);
    }
  };


  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      dialogClassName={style.customDialogStyle}
      contentClassName={style.customContentStyle}
      centered>
        <Modal.Body className={style.modalBody}>
        <Form onSubmit={handleSubmit} className={style.form}>

          <h2 className={style.formTitle}>Register</h2>

          {message && message}

          <Form.Group controlId="email" className={style.inputGroup}>
            <Form.Control 
              type="email" 
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Email" 
              className={style.formInput}/>
          </Form.Group>

          <Form.Group controlId="name" className={style.inputGroup}>
            <Form.Control 
              type="text" 
              name="fullName"
              value={fullName}
              onChange={handleChange}
              placeholder="Name" 
              className={style.formInput}/>
          </Form.Group>

          <Form.Group controlId="username" className={style.inputGroup}>
            <Form.Control 
              type="text" 
              name="username"
              value={username}
              onChange={handleChange}
              placeholder="Username" 
              className={style.formInput}/>

          </Form.Group>
          <Form.Group controlId="password" className={style.inputGroup}>
            <Form.Control 
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Password" 
              className={style.formInput}/>
          </Form.Group>

          <Form.Group className={style.btnGroup}>
            <button type='submit' className={style.btnRegister}>Register</button>
          </Form.Group>

        </Form>
        <p className={style.loginDesc}>Already have an account ? Klik <Link to="/login" style={{textDecoration: "none", color: "#B1B1B1", fontWeight: "bold"}}>Here</Link></p>
        </Modal.Body>
    </Modal>
  );
}

export default Register