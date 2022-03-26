import React from "react";
import cube from "../../../assets/images/types/bed1.jpg";
import mirror from "../../../assets/images/types/cabinet.jpg";
import megamix from "../../../assets/images/types/computer.jpg";
import locking from "../../../assets/images/types/cuboard.jpg";
import skewb from "../../../assets/images/types/image4.jpg";
import pyramix from "../../../assets/images/types/mirror1.jpg";
import gearCube from "../../../assets/images/types/sofa.jpg";
import sqaureOne from "../../../assets/images/types/table3.jpg";
import GridItem from "./GridItem";
import "./style.css";

export const gridData = [
	{ img: cube, title: "BEDS", value: "BEDS" },
	{ img: gearCube, title: "SOFA", value: "SOFA" },
	{ img: mirror, title: "TABLE", value: "TABLE" },
	{ img: skewb, title: "DINNING TABLE", value: "DINNING TABLE" },
	{ img: locking, title: "CUBOARDS", value: "CUBOARDS" },
	{ img: megamix, title: "SHOW PICES", value: "SHOW PICES" },
	{ img: pyramix, title: "DRESSING TABLE", value: "DRESSING TABLE" },
	{ img: sqaureOne, title: "CENTER TABLE ", value: "CENTER TABLE " },
];

const GridList = () => {
	let section1 = gridData
		.slice(0, 3)
		.map((item) => <GridItem key={item.title} img={item.img} title={item.title} linkName={item.value} />);
	let section2 = gridData
		.slice(3, 5)
		.map((item) => (
			<GridItem key={item.title} img={item.img} title={item.title} figClass="is-2by1" linkName={item.value} />
		));
	let section3 = gridData
		.slice(5)
		.map((item) => <GridItem key={item.title} img={item.img} title={item.title} linkName={item.value} />);

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
