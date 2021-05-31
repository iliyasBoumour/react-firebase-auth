import React from "react";
import { Container } from "react-bootstrap";
import { auth } from "../../firebase";
import "./home.css";

const index = () => {
  return (
    <Container className="my-5">
      <h1>Naruto SHIPPUDDEN</h1>
      <table className="my-5">
        <thead>
          <tr>
            <th>image</th>
            <th>name</th>
            <th>caracteristique</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src="/naruto.jpg" width="100px" />
            </td>
            <td>Naruto UZUMAKI</td>
            <td>Kyubi</td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => auth.signOut()}>Sign out</button>
    </Container>
  );
};

export default index;
