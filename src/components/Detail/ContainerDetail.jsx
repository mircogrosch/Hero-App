import React from "react";
import style from "./ContainerDetail.module.css";
import { IconButton } from "@mui/material";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { useHistory } from "react-router-dom";
const ContainerDetail = ({
  height,
  weight,
  name,
  eyeColor,
  hairColor,
  aliases,
  img,
  work,
  fullName,
}) => {
  const history = useHistory();
  return (
    <div className={`container ${style.root}`}>
      <div className="row">
        <div className="col-md-1 col-lg-1">
          <IconButton onClick={() => history.push("/home")}>
            <ArrowBack className={style.icon} />
          </IconButton>
        </div>
        <div className="col-md-4 col-lg-4">
          <div className={style.imgContainer}>
            <img src={img} alt="Hero" className={style.img} />
          </div>
        </div>

        <div className={`col-md-7 col-lg-7 ${style.textCol}`}>
          <h1>{name}</h1>
          <div>
            <ul>
              <li>
                <span>Full Name:</span>
                {fullName}
              </li>
              <li>
                <span>Height:</span>
                {height}
              </li>
              <li>
                <span>Weight:</span>
                {weight}
              </li>
              <li>
                <span> Eye Color:</span> {eyeColor}
              </li>
              <li>
                <span> Hair Color:</span>
                {hairColor}
              </li>
              <li>
                <span> Base Work:</span>
                {work}
              </li>

              <li>
                <span> Aliases:</span> {aliases.map((alias) => `${alias}, `)}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerDetail;
