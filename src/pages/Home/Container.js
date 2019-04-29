import React, { Component } from "react";
import config from "../../config/env.js";
import { getLocationsByCompanyId } from "../../api";

import HomeComponent from "./Component";

class HomeContainer extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      locations: []
    };
  }

  componentDidMount = () => {
    getLocationsByCompanyId(config.companyId).then(locations => {
      this.setState({
        locations: locations,
        loading: false
      });
    });
  };

  render() {
    return (
      <HomeComponent
        locations={this.state.locations}
        loading={this.state.loading}
      />
    );
  }
}

export default HomeContainer;
