import React from "react";
import { albumData } from "../data/data";

const AlbumBody = () => {
	return (
		<div className="ABody_container">
			<div className="container-fluid">
				<input type="text" placeholder="Search..." />
				<br />
				<br />
				<div className="row">
					{albumData.map((prev, i) => {
						return (
							<>
								<div key={i} className="col-lg-3 col-md-6 col-sm-12 p-2">
									<div className="albumCard">
										<img src={prev.img} alt={prev.img} />
									</div>
								</div>
							</>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default AlbumBody;
