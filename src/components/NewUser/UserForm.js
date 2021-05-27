import React from "react";
import { Form, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";


const handlerSubmit = (event) =>{
   event.preventDefault();
}

const UserForm = () => {
  const { t } = useTranslation();
  return (
    <Form onSubmit={handlerSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> {t("new-user.username")}</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> {t("new-user.age")}</Form.Label>
        <Form.Control type="number" />
        <Form.Text className="text-muted">{t("new-user.in-year")}</Form.Text>
      </Form.Group>

      <Button variant="primary" className="float-right" type="submit">
        {t("new-user.add-user")}
      </Button>
    </Form>
  );
};

export default UserForm;
