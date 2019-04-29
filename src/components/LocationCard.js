import React from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
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
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {location.street_address}
        </Typography>
        <Typography color="textSecondary">{partialAddress}</Typography>
      </CardContent>
      <CardActions>
        <Link to={`/detail/${location.id}`}>
          <Button color="primary">SEE DEALS</Button>
        </Link>
        <Button color="primary">
          <PhoneIcon />
          {location.phone_number}
        </Button>
      </CardActions>
    </Card>
  );
};

export default LocationCard;
