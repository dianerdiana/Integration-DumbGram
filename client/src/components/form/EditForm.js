import { Button, Form, Image } from "react-bootstrap"
import { useState, useContext, useEffect } from "react"
import { UserContext } from '../../context/userContext';

import { API } from '../../config/api'
import { useParams, useNavigate } from "react-router-dom";

import styleForm from "./Form.module.css"


function EditForm() {

  let navigate = useNavigate()

  const [state, dispatch] = useContext(UserContext);
  const id = state.user.id

  const [preview, setPreview] = useState("http://localhost:5000/uploads/" + state.user.image);
  const [form, setForm] = useState({
    fullName: state.user.fullName,
    email: state.user.email,
    bio: state.user.bio
  })

  console.log(form)

  const {fullName, email, bio } = form

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.type === "file" ? e.target.files : e.target.value,
    });

    //Create image url for preview
    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      // Configuration
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };

      // Store data with FormData as object
      const formData = new FormData();
      if (form.image) {
        formData.set("image", form?.image[0], form?.image[0]?.name);
        }

        formData.set("fullName", form.fullName);
        formData.set("email", form.email);
        formData.set("bio", form.bio);

      // Insert product data
      const response = await API.patch("/user/" + id, formData, config);
      console.log(response.data);
      
      if(response.status == 200) {
        navigate("/feed")
      }
      // navigate("/feed");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className={styleForm.form}>

        {preview && (
          <div>
            <Image
              src={preview}
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
              }}
              alt="preview"
            />
          </div>
        )}

        <Form.Group controlId="image" className={styleForm.formGroup}>
          <Form.Control type="file" name="image" onChange={handleChange}  hidden/>
          <Form.Label className={styleForm.formBtnUpload}>Upload Photo</Form.Label>
        </Form.Group>

        <Form.Group controlId="name" className={styleForm.formGroup}>
          <Form.Control 
            type="text" 
            placeholder="Name"
            name="fullName"
            value={fullName}
            onChange={handleChange}
            className={styleForm.formInput}
          />
        </Form.Group>

        <Form.Group controlId="email" className={styleForm.formGroup}>
          <Form.Control 
            type="email" 
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
            className={styleForm.formInput}
          />

        </Form.Group>

        <Form.Group controlId="bio" className={styleForm.formGroup}>
          <Form.Control 
            as="textarea" 
            rows={6} 
            placeholder="Bio"
            name="bio"
            value={bio}
            onChange={handleChange}
            className={styleForm.formInput}
          />
        </Form.Group >

        <Form.Group className={styleForm.formGroup} style={{position: "relative"}}>
          <Button type="submit" className={styleForm.formBtnSave}>Save</Button>
        </Form.Group>

      </Form>
    </>
  )
}

export default EditForm;