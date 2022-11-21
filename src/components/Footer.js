import React from "react";
import { Email } from "@material-ui/icons/";
import { LinkedIn } from "@material-ui/icons/";
import { GitHub } from "@material-ui/icons/";
import "../styles/Footer.css";

function Footer() {
	return (
		<div className="footer">
			<div className="socialMedia">
				<a
					href="https://www.linkedin.com/in/yeasirh/"
					target="_blank"
					rel="noreferrer"
				>
					<LinkedIn />
				</a>
				<a href="https://github.com/yeasirh" target="_blank" rel="noreferrer">
					<GitHub />
				</a>
				<a href="mailto:yeasirh@gmail.com">
					<Email />
				</a>
				<p>&copy; 2022 yeasirh.me</p>
			</div>
		</div>
	);
}

export default Footer;
