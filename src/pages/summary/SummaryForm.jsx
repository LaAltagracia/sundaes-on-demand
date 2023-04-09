import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function SummaryForm() {
  const [tcChecked, setTcChecked] = useState(false);
  const checkboxLabel = (
    <span>
      I agree to <span style={{ color: "blue" }}> Tearms and Consitons</span>
    </span>
  );

  return (
    <Form>
      <Form.Group controlId="terms-and-conditons">
        <Form.Check
          type="checkbox"
          checked={tcChecked}
          onChange={(e) => setTcChecked(e.target.checked)}
          label={checkboxLabel}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!tcChecked}>
        confirm order
      </Button>
    </Form>
  );
}
