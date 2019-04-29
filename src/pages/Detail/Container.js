import React, { Component } from "react";
import config from "../../config/env.js";
import { getDealsByCompanyIdAndLocationId } from "../../api";

import DetailComponent from "./Component";

class DetailContainer extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      deals: []
    };
  }

  componentDidMount = () => {
    const locationId = this.props.match.params.locationId;
    getDealsByCompanyIdAndLocationId(config.companyId, locationId).then(
      deals => {
        this.setState({
          deals: deals,
          loading: false
        });
      }
    );
  };

  render() {
    return (
      <DetailComponent loading={this.state.loading} deals={this.state.deals} />
    );
  }
}

export default DetailContainer;
