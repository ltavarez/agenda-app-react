import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import UseForm from "./UserForm";
import { useTranslation } from "react-i18next";

const NewUser = () => {
  const { t } = useTranslation();

  return (
    <Row className="mb-4">
      <Col md={12} xs={12}>
        <Card>
          <Card.Header className="bg-dark text-light">
            {t("new-user.title")}
          </Card.Header>
          <Card.Body>
            <UseForm> </UseForm>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default NewUser;
