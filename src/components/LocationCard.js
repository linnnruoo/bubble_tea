import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PhoneIcon from "@material-ui/icons/Phone";

const LocationCard = props => {
  const { location } = props;

  const partialAddress = [
    location.city,
    location.state,
    location.country,
    location.zip_code
  ].join(", ");

  return (
    <Card style={{ maxWidth: 600 }}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {location.street_address}
        </Typography>
        <Typography color="textSecondary">{partialAddress}</Typography>
        <Button>
          <PhoneIcon />
          {location.phone_number}
        </Button>
      </CardContent>
    </Card>
  );
};

export default LocationCard;
