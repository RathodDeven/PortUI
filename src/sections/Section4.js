import React from "react";
import test1 from "../assets/test1.jpg";
import test2 from "../assets/test2.jpg";

export default function Section4() {
	return (
		<section className="bg-img pt-3 p-rel">
			<div className="title text-center">Lets shape this Metaverse Together</div>
			<div className="flex-container mt-2">
				<div className="img-container">
				<img src={test1} alt="text" className="img-custom" />
				<div className="img-text">Apply to become a creator</div>
				</div>
				<div className="img-container">
				<img src={test2} alt="text" className="img-custom" />
				<div className="img-text">Join Discord</div>
				</div>
			</div>
		</section>
	);
}
