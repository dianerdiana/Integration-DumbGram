import { Modal, Form, Alert } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'
import style from "./Login.module.css"

import { API } from '../../config/api'

import { useState, useContext } from 'react';
import { UserContext } from '../../context/userContext';

function Login(props) {
  
  const [state, dispatch] = useContext(UserContext);

  const [message, setMessage] = useState(null);

  // Store data with useState here ...
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const { email, password } = form;

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

      // Insert data user for login process here ...
      const response = await API.post('/login', body, config);

      // Checking process
      if (response?.status == 200) {
        // Send data to useContext
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: response.data.data.user,
        });

        // Status check

        const alert = (
          <Alert variant="success" className="py-1">
            Login success
          </Alert>
        );
        setMessage(alert);
      }
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Login failed
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

          <h2 className={style.formTitle}>Login</h2>

          {message && message}

          <Form.Group controlId="email" className={style.inputGroup}>
            <Form.Control 
              type="email" 
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
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
            <button className={style.btnLogin}>Login</button>
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