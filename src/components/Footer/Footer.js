import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="footer has-background-dark has-text-centered" style={{ position: "sticky", bottom: 0 }}>
			<div className="buttons is-centered">
				{/* github, instagram, linkin, bulma  */}
				<Link className="button is-black">
					<span className="icon is-size-5 is-medium">
						<AiFillFacebook />
					</span>
				</Link>
				<Link className="button is-black">
					<span className="icon is-size-5 is-medium">
						<FaInstagram />
					</span>
				</Link>
			</div>
			<p>Designed & Built by SAGAR MISHRA </p>
			<br />
			<p>Contact me </p>
			<a href="">sagarmishra1017@gmail.com</a>
		</div>
	);
};

export default Footer;
