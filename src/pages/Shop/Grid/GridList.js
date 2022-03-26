import React from "react";
import "./style.css";
import cube from "../../../assets/images/types/bed1.jpg";
import gearCube from "../../../assets/images/types/sofa.jpg";
import mirror from "../../../assets/images/types/cabinet.jpg";
import skewb from "../../../assets/images/types/image4.jpg";
import locking from "../../../assets/images/types/cuboard.jpg";
import megamix from "../../../assets/images/types/computer.jpg";
import pyramix from "../../../assets/images/types/mirror1.jpg";
import sqaureOne from "../../../assets/images/types/table3.jpg";
import GridItem from "./GridItem";

export const gridData = [
  { img: cube, title: "BEDS", value: "Standard Speed Cube" },
  { img: gearCube, title: "SOFA", value: "Gear Cube" },
  { img: mirror, title: "TABLE", value: "Mirror Cube" },
  { img: skewb, title: "DINNING TABLE", value: "Skewb" },
  { img: locking, title: "CUBOARDS", value: "Locking Puzzels" },
  { img: megamix, title: "SHOW PICES", value: "Megamix" },
  { img: pyramix, title: "DRESSING TABLE", value: "Pyramix" },
  { img: sqaureOne, title: "CENTER TABLE ", value: "Square-1" },
];

const GridList = () => {
  let section1 = gridData
    .slice(0, 3)
    .map((item) => (
      <GridItem
        key={item.title}
        img={item.img}
        title={item.title}
        linkName={item.value}
      />
    ));
  let section2 = gridData
    .slice(3, 5)
    .map((item) => (
      <GridItem
        key={item.title}
        img={item.img}
        title={item.title}
        figClass="is-2by1"
        linkName={item.value}
      />
    ));
  let section3 = gridData
    .slice(5)
    .map((item) => (
      <GridItem
        key={item.title}
        img={item.img}
        title={item.title}
        linkName={item.value}
      />
    ));

  return (
    <div className="section">
      <p className="title has-text-primary">Shop By Categories</p>
      <div className="columns">{section1}</div>
      <div className="columns">{section2}</div>
      <div className="columns">{section3}</div>
    </div>
  );
};

export default GridList;
