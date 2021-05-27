import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NewUser from "./components/NewUser/NewUser";
import { Suspense } from "react";
import UserList from "./components/UserList/UserList";

function App() {
  return (
    <Container fluid>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <NewUser />
          <UserList />
        </Col>
      </Row>
    </Container>
  );
}

export default function WrappedApp() {
  return (
    <Suspense fallback="...is loading">
      <App />
    </Suspense>
  );
}
