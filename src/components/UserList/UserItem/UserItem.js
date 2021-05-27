import { Row, Col, Card, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const UserItem = (props) => {
  const { t } = useTranslation();
  return (
    <Row>
      <Col md={12} xs={12}>
        <Card>
          <Card.Body>
            {" "}
            {`${props.name} (${props.age} ${t("user-item.year-text")})`}{" "}
            <span className="float-right">
              {" "}
              <Button variant="danger"> {t("user-item.delete")} </Button>{" "}
            </span>{" "}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default UserItem;
