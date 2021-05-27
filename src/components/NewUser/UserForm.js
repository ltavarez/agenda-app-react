import React, { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useAlert } from "react-alert";

const UserForm = (props) => {
  const [enteredUser, setEnteredUser] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [validated, setValidated] = useState(false);

  const alert = useAlert();
  const { t } = useTranslation();

  const handlerSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      alert.error(t("globals.message-error"));
      setValidated(true);
    } else {
      const newUser = { name: enteredUser, age: +enteredAge };
      props.onAddUser(newUser);

      setValidated(false);
      reset(); 
    }
  };

  const changeUserHandler = (event) => {
    setEnteredUser(event.target.value);
  };

  const changeAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const reset = () => {
    setEnteredAge("");
    setEnteredUser("");
  };

  return (
    <Form noValidate validated={validated} onSubmit={handlerSubmit}>
      <Form.Group className="mb-3" controlId="username">
        <Form.Label> {t("new-user.username")}</Form.Label>
        <InputGroup hasValidation>
          <Form.Control
            onChange={changeUserHandler}
            value={enteredUser}
            type="text"
            required
          />
          <Form.Control.Feedback type="invalid">
            {t("user-form-validation.username-validation-message")}
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>

      <Form.Group className="mb-3" controlId="age">
        <Form.Label> {t("new-user.age")}</Form.Label>
        <InputGroup hasValidation>
          <Form.Control
            onChange={changeAgeHandler}
            value={enteredAge}
            type="number"
            min="1"
            required
          />
          <Form.Control.Feedback type="invalid">
            {t("user-form-validation.age-validation-message")}
          </Form.Control.Feedback>
        </InputGroup>
        <Form.Text className="text-muted">{t("new-user.in-year")}</Form.Text>
      </Form.Group>

      <Button variant="primary" className="float-right" type="submit">
        {t("new-user.add-user")}
      </Button>
    </Form>
  );
};

export default UserForm;