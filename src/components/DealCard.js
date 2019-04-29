import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import GridItem from "./GridItem";
import GridContainer from "./GridContainer";

const DealCard = ({ deal }) => {
  const renderVariations = () => {
    return deal.variations.map((info, index) => {
      return (
        <GridItem key={info.id}>
          <Typography style={{ fontWeight: "bold" }}>{info.name}</Typography>
        </GridItem>
      );
    });
  };

  return (
    <Card style={{ maxWidth: 600 }}>
      <CardContent>
        <Typography gutterBottom color="primary" variant="h5" component="h2">
          {deal.service.name}
        </Typography>
        <GridContainer>{renderVariations()}</GridContainer>
      </CardContent>
    </Card>
  );
};

export default DealCard;
