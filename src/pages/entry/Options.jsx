import axios from "axios";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import { ScoopOptions } from "./ScoopOptions";

export function Options({ optionType }) {
  const [items, setItems] = useState([]);

  //optionType is scoops or toppings
  useEffect(() => {
    axios
      .get(`{http://localhost3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => {
        //TODO: handle error
        console.log(error);
      });
  }, [optionType]);
  //TODO: replace 'null with toppingOption when available
  const ItemsComponent = optionType === "scoops" ? ScoopOptions : null;

  const optionItems = items.map((item) => (
    <ItemsComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return (
    <Row> {optionItems.length === 0 ? "No Items Available" : optionItems} </Row>
  );
}
