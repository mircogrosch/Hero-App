import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import PowerStats from "./PowerStats/PowerStats";
import style from "./ContainerResults.module.css";
import ContainerCard from "../Card/ContainerCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ContainerResults = () => {
  const heroesSearch = useSelector((state) => state.hereosSearch.results);

  return (
    <div className={`container ${style.root}`}>
      <div className="row">
        <div className="col-md-6 col-lg-6">
          <h1>My Team</h1>
          <div>
            <SearchBar />
          </div>
        </div>

        <div className="col-md-6 col-lg-6">
          {heroesSearch?.length ? (
            <Link to="/home">
              <button>View My Team</button>
            </Link>
          ) : (
            <PowerStats />
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-lg-12">
          <ContainerCard />
        </div>
      </div>
    </div>
  );
};

export default ContainerResults;
