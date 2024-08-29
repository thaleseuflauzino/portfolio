import React from "react";
import { Container} from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
    </Container>
  );
}

export default Footer;
