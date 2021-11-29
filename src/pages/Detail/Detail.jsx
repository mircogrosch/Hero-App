import React, { useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import ContainerDetail from "../../components/Detail/ContainerDetail";
import style from "./Detail.module.css";
import { getHeroDetail } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getHeroDetail(id));
  }, [dispatch, id]);
  const heroDetail = useSelector((state) => state.heroDetail);

  return (
    <div className={`container-fluid ${style.root}`}>
      <NavBar />
      {heroDetail.response ? (
        <ContainerDetail
          img={heroDetail.image.url}
          name={heroDetail.name}
          height={heroDetail.appearance.height[1]}
          weight={heroDetail.appearance.weight[1]}
          eyeColor={heroDetail.appearance["eye-color"]}
          hairColor={heroDetail.appearance["hair-color"]}
          fullName={heroDetail.biography["full-name"]}
          work={heroDetail.work.base}
          aliases={heroDetail.biography.aliases}
        />
      ) : (
        false
      )}
    </div>
  );
};

export default Detail;
