import { Row, Col, Card } from "react-bootstrap";
import UserItem from "./UserItem/UserItem";
import { useTranslation } from "react-i18next";

const UserList = (props) => {
  const { t } = useTranslation();

  const deleteHandler = (userId) => {
    props.onDelete(userId);
  };

  let content = t("user-list.not-users");

  if (props.items.length > 0) {
    content = props.items.map((user) => (
      <UserItem
        onDelete={deleteHandler}
        key={user.id}
        id={user.id}
        name={user.name}
        age={user.age}
      />
    ));
  }

  return (
    <Row>
      <Col md={12} xs={12}>
        <Card>
          <Card.Header className="bg-primary text-light">
            {t("user-list.title")}
          </Card.Header>
          <Card.Body>{content}</Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default UserList;
