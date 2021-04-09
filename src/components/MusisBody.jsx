import React from "react";
import Song from "./Song";
import { songs } from "../data/data";
import MusicPlayer from "./MusicPlayer";

const MusisBody = () => {
	return (
		<>
			<div className="MBody_container">
				<div className="headAndSearch">
					<h2 className="m-0">Music Track</h2>
					<input type="text" placeholder="Search..." />
				</div>
				{songs.map((prev) => {
					return <Song {...prev} />;
				})}
			</div>
			<div className="music_player">
				<MusicPlayer />
			</div>
		</>
	);
};

export default MusisBody;
