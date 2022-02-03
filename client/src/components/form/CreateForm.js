import { Button, Form } from "react-bootstrap"
import styleForm from "./Form.module.css"


function CreateForm() {
  return (
    <>
      <Form className={styleForm.form}>
        <Form.Group className="mb-3" className={styleForm.formGroup}>
          <Button className={styleForm.formBtnUpload}>Upload photos or videos</Button>
        </Form.Group>
        <Form.Group className="mb-3" controlId="caption" className={styleForm.formGroup}>
          <Form.Control as="textarea" rows={6} placeholder="Caption" className={styleForm.formInput}/>
        </Form.Group >
        <Form.Group className="mb-3" className={styleForm.formGroup} style={{position: "relative"}}>
          <Button className={styleForm.formBtnSave}>Upload</Button>
        </Form.Group>
      </Form>
    </>
  )
}

export default CreateForm;