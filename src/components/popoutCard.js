import { useState } from "react";
import { Card, CardBody } from "@nextui-org/react";

const PopOutCard = ({color, children }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Card
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    style={{
      transition: "transform 0.3s ease",
      transform: hovered ? "scale(1.05)" : "scale(1)",
      width: "100%", // Ensure the card takes the full width of the grid item
      height: "100%", // Ensure the card takes the full height of the grid item
      display: "flex", // Make the card's contents align vertically
      flexDirection: "column", // Align the card's contents vertically
      justifyContent: "space-between", // Ensure equal space between card's contents
      backgroundColor: color,
    }}
  >
      <CardBody>{children}</CardBody>
    </Card>
  );
};

export default PopOutCard;
