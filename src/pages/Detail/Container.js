import React, { Component } from "react";
import config from "../../config/env.js";
import {
  getDealsByCompanyIdAndLocationId,
  getPricingsByCompanyIdAndLocationId
} from "../../api";

import DetailComponent from "./Component";

class DetailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationId: props.match.params.locationId,
      loading: true,
      deals: [],
      variationIds: [],
      pricings: []
    };
  }

  getDeals = () => {
    getDealsByCompanyIdAndLocationId(
      config.companyId,
      this.state.locationId
    ).then(deals => {
      this.setState({
        deals: deals,
        loading: false
      });
    });
  };

  getPricings = () => {
    getPricingsByCompanyIdAndLocationId(
      config.companyId,
      this.state.locationId
    ).then(pricings => {
      this.setState({ pricings });
    });
  };

  componentDidMount = () => {
    this.getDeals();
    this.getPricings();
  };

  render() {
    return (
      <DetailComponent loading={this.state.loading} deals={this.state.deals} />
    );
  }
}

export default DetailContainer;
