import { Button, Form } from "react-bootstrap"
import styleForm from "./Form.module.css"


function EditForm() {
  return (
    <>
      <Form className={styleForm.form}>
        <Form.Group className="mb-3" className={styleForm.formGroup}>
          <Button className={styleForm.formBtnUpload}>Upload photos</Button>
        </Form.Group>
        <Form.Group className="mb-3" controlId="name" className={styleForm.formGroup}>
          <Form.Control type="text" placeholder="Name" className={styleForm.formInput}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="email" className={styleForm.formGroup}>
          <Form.Control type="text" placeholder="Email" className={styleForm.formInput}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="bio" className={styleForm.formGroup}>
          <Form.Control as="textarea" rows={6} placeholder="Bio" className={styleForm.formInput}/>
        </Form.Group >
        <Form.Group className="mb-3" className={styleForm.formGroup} style={{position: "relative"}}>
          <Button className={styleForm.formBtnSave}>Save</Button>
        </Form.Group>
      </Form>
    </>
  )
}

export default EditForm;