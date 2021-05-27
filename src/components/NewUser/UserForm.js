import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useAlert } from "react-alert";

const UserForm = (props) => {
  const [enteredUser, setEnteredUser] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const alert = useAlert();
  const { t } = useTranslation();

  const handlerSubmit = (event) => {
    event.preventDefault();

    const newUser = { name: enteredUser, age: enteredAge };
    props.onAddUser(newUser);

    //alert.error("Oh look, an alert!");
    reset();
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
    <Form onSubmit={handlerSubmit}>
      <Form.Group className="mb-3" controlId="username">
        <Form.Label> {t("new-user.username")}</Form.Label>
        <Form.Control
          onChange={changeUserHandler}
          value={enteredUser}
          type="text"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="age">
        <Form.Label> {t("new-user.age")}</Form.Label>
        <Form.Control
          onChange={changeAgeHandler}
          value={enteredAge}
          type="number"
        />
        <Form.Text className="text-muted">{t("new-user.in-year")}</Form.Text>
      </Form.Group>

      <Button variant="primary" className="float-right" type="submit">
        {t("new-user.add-user")}
      </Button>
    </Form>
  );
};

export default UserForm;
