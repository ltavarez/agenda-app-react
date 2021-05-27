import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NewUser from "./components/NewUser/NewUser";
import { Suspense } from "react";
import UserList from "./components/UserList/UserList";

const USER = [
  { id: Math.random().toString(), name: "Leo", age: 27 },
  { id: Math.random().toString(), name: "Jose", age: 33 },
  { id: Math.random().toString(), name: "Mateo", age: 45 },
];

function App() {
  const [users, setUsers] = useState(USER);

  const onDeleteHandler = (userId) => {
    setUsers((prevState) => {
      const newUsers = prevState.filter((x) => x.id !== userId);
      return newUsers;
    });
  };

  const onAddHandler = (newUser) => {
    const user = { id: Math.random().toString(), ...newUser };

    setUsers((prevState) => {
      return [user, ...prevState];
    });
  };

  return (
    <Container fluid>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <NewUser onAddUser={onAddHandler} />
          <UserList onDelete={onDeleteHandler} items={users} />
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
