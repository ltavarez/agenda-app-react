import { Row, Col, Card, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
const UserItem = (props) => {
  const deleteHandler = () => {
    confirmAlert({
      title: t("user-item.confirmation-delete"),
      message: "",
      buttons: [
        {
          label: t("globals.yes"),
          onClick: () => props.onDelete(props.id),
        },
        {
          label: t("globals.no"),
        },
      ],
    });
  };

  const { t } = useTranslation();
  return (
    <Row>
      <Col md={12} xs={12}>
        <Card>
          <Card.Body>
            {`${props.name} (${props.age} ${t("user-item.year-text")})`}
            <span className="float-right">
              <Button onClick={deleteHandler} variant="danger">
                {t("user-item.delete")}
              </Button>
            </span>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default UserItem;
