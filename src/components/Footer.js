import React from "react";
import { Email, Instagram } from "@material-ui/icons/";
import { Twitter } from "@material-ui/icons/";
import { Facebook } from "@material-ui/icons/";
import { LinkedIn } from "@material-ui/icons/";
import { GitHub } from "@material-ui/icons/";
import "../styles/Footer.css";

function Footer() {
	return (
		<div className="footer">
			<div className="socialMedia">
				<a href="https://www.linkedin.com/in/yeasirh/" target="_blank">
					<LinkedIn />
				</a>
				<a href="https://github.com/yeasirh" target="_blank">
					<GitHub />
				</a>
				<Email />
				<p>&copy; 2022 yeasirh.me</p>
			</div>
		</div>
	);
}

export default Footer;
