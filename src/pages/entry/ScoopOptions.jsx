import Col from "react-bootstrap/Col";

export function ScoopOptions({ name, imagePath }) {
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
      <img
        testId="imgScoops"
        style={{ width: "75%" }}
        src={`http://localhost3030/${imagePath}`}
        alt={`${name} scoop`}
      />
    </Col>
  );
}
