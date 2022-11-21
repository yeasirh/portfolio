import React from "react";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { School, Work } from "@material-ui/icons";

function Experience() {
	return (
		<div className="experience">
			<VerticalTimeline lineColor="#3e497a">
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="2010-2014"
					iconStyle={{ background: "#3e497a", color: "#ffff" }}
					icon={<School />}
				>
					<h3 className="vertical-timeline-element--title">
						{" "}
						BRAC University, Bangladesh
					</h3>
					<p>Bsc in Computer Science & Engineering</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="May 2015 - August 2016"
					iconStyle={{ background: "#568203", color: "#ffff" }}
					icon={<Work />}
				>
					<h3 className="vertical-timeline-element--title">
						{" "}
						Parallaxlogix Infotech, Dhaka, Bangladesh
					</h3>
					<p>Junior Software Developer</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="2016-2019"
					iconStyle={{ background: "#3e497a", color: "#ffff" }}
					icon={<School />}
				>
					<h3 className="vertical-timeline-element--title">
						{" "}
						Federation University Australia
					</h3>
					<p>Master of Technology (Software Engineering)</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="November 2019 - June 2020"
					iconStyle={{ background: "#568203", color: "#ffff" }}
					icon={<Work />}
				>
					<h3 className="vertical-timeline-element--title">
						{" "}
						PetSpot, Sydney, Australia
					</h3>
					<p>Backend Software Developer Intern</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="July 2020 - January 2021"
					iconStyle={{ background: "#568203", color: "#ffff" }}
					icon={<Work />}
				>
					<h3 className="vertical-timeline-element--title">
						{" "}
						Majesty Arising Professional Services Solutions, Sydney, Australia
					</h3>
					<p>Web Application Developer</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="October 2021 - present"
					iconStyle={{ background: "#568203", color: "#ffff" }}
					icon={<Work />}
				>
					<h3 className="vertical-timeline-element--title">
						{" "}
						Maropost, Brisbane, Australia
					</h3>
					<p>Software Developer</p>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</div>
	);
}

export default Experience;
