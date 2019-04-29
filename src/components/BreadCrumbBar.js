import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/lab/Breadcrumbs";
import Link from "@material-ui/core/Link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const styles = theme => ({
  root: {
    justifyContent: "center",
    flexWrap: "wrap"
  }
});

const BreadCrumbBar = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        arial-label="Breadcrumb"
      >
        <Link color="inherit" href="/">
          Home
        </Link>
      </Breadcrumbs>
    </div>
  );
};

export default withStyles(styles)(BreadCrumbBar);
