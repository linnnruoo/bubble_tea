import React from "react";
import Grid from "@material-ui/core/Grid";

const GridContainer = ({ children, ...rest }) => {
  return (
    <Grid
      container
      spacing={16}
      alignItems="flex-end"
      direction="row"
      justify="center"
      {...rest}
    >
      {children}
    </Grid>
  );
};

export default GridContainer;
