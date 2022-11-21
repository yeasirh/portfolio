import React from "react";
import { Email, LinkedIn } from "@material-ui/icons";
import { GitHub } from "@material-ui/icons";
import "../styles/Home.css";

function Home() {
	return (
		<div className="home">
			<div className="about">
				<h2>Hi, I am Yeasir</h2>
				<div className="prompt">
					<p>
						A software developer, with passion for learning new skills and
						building new things.
					</p>
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
				</div>
			</div>
			<div className="skills">
				<h2>Skills</h2>
				<ol className="list">
					<li className="item">
						<h4>Languages</h4>
						<span>PHP, Javascript, TypeScript, Python, Java</span>
					</li>

					<li className="item">
						<h4>Database</h4>
						<span>MySql</span>
					</li>

					<li className="item">
						<h4>Frameworks</h4>
						<span>Laravel, Symfony, CodeIgniter, ReactJS</span>
					</li>

					<li className="item">
						<h4>Tools</h4>
						<span>Git, Jira, Postman, Docker</span>
					</li>

					<li className="item">
						<h4>Testing</h4>
						<span>PHPUnit, React Testing Library</span>
					</li>

					<li className="item">
						<h4>Platforms</h4>
						<span>AWS, Netlify</span>
					</li>
				</ol>
			</div>
		</div>
	);
}

export default Home;
