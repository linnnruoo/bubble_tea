import React from "react";
import Spinner from "../../components/Spinner";
import GridContainer from "../../components/GridContainer";
import GridItem from "../../components/GridItem";
import DealCard from "../../components/DealCard";
import BreadCrumbBar from "../../components/BreadCrumbBar";

const DetailComponent = ({ deals, loading }) => {
  if (loading) return <Spinner />;

  const renderDeals = () => {
    return deals.map((deal, index) => {
      return (
        <GridItem key={index}>
          <DealCard deal={deal} />
        </GridItem>
      );
    });
  };

  return (
    <>
      <BreadCrumbBar />
      <GridContainer>{renderDeals()}</GridContainer>{" "}
    </>
  );
};

export default DetailComponent;
