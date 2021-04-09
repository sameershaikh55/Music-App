import React, { useState } from "react";
import { FaShareAlt } from "react-icons/fa";
import { ImPlay2 } from "react-icons/im";
import { FiDownload } from "react-icons/fi";
import { BsStar, BsStarFill } from "react-icons/bs";
import { CgPlayPauseO } from "react-icons/cg";

const Song = (prev) => {
	const [play, setPlay] = useState(false);

	const handleChange = () => {
		setPlay((prev) => !prev);
	};

	const { name, detail, singer, duration } = prev;

	return (
		<>
			<div className="songRow">
				<div>
					{play ? (
						<CgPlayPauseO
							onClick={handleChange}
							className="play cursor-pointer"
						/>
					) : (
						<ImPlay2 onClick={handleChange} className="play cursor-pointer" />
					)}
					&nbsp; &nbsp;
					<div>
						<div>
							{name} | {singer}
						</div>
						<div>{detail}</div>
					</div>
				</div>
				<div className="d-flex">
					<div id="duration">{duration}</div>
					&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
					&nbsp; &nbsp;
					<div className="SSD_icons">
						<FiDownload className="mr-3 cursor-pointer" />
						{play ? (
							<BsStarFill
								onClick={handleChange}
								className="mr-3 cursor-pointer"
							/>
						) : (
							<BsStar onClick={handleChange} className="mr-3 cursor-pointer" />
						)}
						<FaShareAlt />
					</div>
				</div>
			</div>
		</>
	);
};

export default Song;
