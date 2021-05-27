import { Row, Col, Card } from "react-bootstrap";
import UserItem from './UserItem/UserItem';
import { useTranslation } from "react-i18next";

const UserList = () => {
const { t } = useTranslation();
  return (
    <Row>
      <Col md={12} xs={12}>
        <Card>
          <Card.Header className="bg-primary text-light">
            {t("user-list.title")}
          </Card.Header>
          <Card.Body>
            <UserItem name="Leo" age="23" />
            <UserItem name="Jose" age="32" />
            <UserItem name="Mateo" age="27" />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default UserList;
