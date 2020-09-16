import React from "react";
import data from "../data.json";

export default function Resume(props){
	let profile = data.details[props.location.personcard.id];
	console.log(profile);
	return (
		<div className="row">
	{/*cards data*/}
			<div className="col-sm-10 col-md-2 mr-1" >
						<div className="card">
							
							<h1 className="text-danger">{profile.Card.name}</h1>
							<h3 className="text-secondary">{profile.Card.des}</h3>
							<a href={"mailto:" + profile.Card.email}>
							<h6>{profile.Card.email}</h6>
							</a>
							<h5 className="text-success">{profile.Card.mobile}</h5>
							
						</div>
					</div>
		{/*get the remaining resume data */}
		<div className=" card col-sm-10 col-md-9 ">
		<h2 className="text-warning">career objecr</h2>
		<hr />
		<h3 className="text-info">{profile.career}</h3>
		</div>
		
		<div className=" card col-sm-10 col-md-9 ">
		<h2 className="text-warning">Educational Details</h2>
		<hr />
		<h3 className="text-info">{profile.edu}</h3>
		</div>
		
		<div className=" card col-sm-10 col-md-9 ">
		<h2 className=" text-warning">Technical Skills</h2>
		<hr />
		<h3 className="text-info">{profile.tech}</h3>
		</div>
		
		<div className=" card col-sm-10 col-md-9 ">
		<h2 className=" text-warning">Projects</h2>
		<hr />
		<h3 className="text-info">{profile.pro}</h3>
		</div>

		<div className=" card col-sm-10 col-md-9 ">
		<h2 className=" text-warning">Awards</h2>
		<hr />
		<h3 className="text-info">{profile.awards}</h3>
		</div>




		</div>
		);
	};
