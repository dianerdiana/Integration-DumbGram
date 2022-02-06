import { Button, Form, Image } from "react-bootstrap"

import { useState, useContext, useEffect } from "react"
import { UserContext } from '../../context/userContext';

import { API } from '../../config/api'
import { useNavigate } from "react-router-dom";

import styleForm from "./Form.module.css"


function CreateForm() {

  const navigate = useNavigate()

  const [preview, setPreview] = useState(null)
  const [ form, setForm ] = useState({
    fileName: "",
    caption: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === 'file' ? e.target.files : e.target.value,
    });

    // Create image url for preview
    if (e.target.type === 'file') {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      // Create Configuration Content-type here ...
      // Content-type: multipart/form-data
      const config = {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      };

      // Create store data with FormData as object here ...
      const formData = new FormData();

      formData.set('image', form.image[0], form.image[0].name);
      formData.set('caption', form.caption);

      // Insert product data here ...
      const response = await API.post('/feed', formData, config);

      console.log(response);

      if (response.status == 200){
        navigate("/explore")
      }

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
          <Form.Label className={styleForm.formBtnUpload}>Upload photos or videos</Form.Label>
        </Form.Group>

        <Form.Group controlId="caption" className={styleForm.formGroup}>
          <Form.Control as="textarea" name="caption" rows={6} placeholder="Caption" className={styleForm.formInput}/>
        </Form.Group >

        <Form.Group className={styleForm.formGroup} style={{position: "relative"}}>
          <Button type="submit" className={styleForm.formBtnSave}>Upload</Button>
        </Form.Group>
      </Form>
    </>
  )
}

export default CreateForm;