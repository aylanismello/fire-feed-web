import React from 'react';
import { Link } from 'react-router-dom';
import * as FontAwesome from 'react-icons/lib/fa/';
import TagList from '../shared/tag_list';
import TrackBadge from '../shared/track_badge';


const TrackBanner = ({
	track,
	playingTrackId,
	playing,
	trackLoaded,
	handleTrackClick,
	children
}) => {
	const playIconUrl =
		'https://cdn3.iconfinder.com/data/icons/seo-marketing-2-1/48/56-128.png';
	const pauseIconUrl =
		'https://cdn1.iconfinder.com/data/icons/media-volume-1/48/017-512.png';
	const loadingIconUrl =
		'https://cdn1.iconfinder.com/data/icons/loading-wait-time/256/loading_wait_time_02-128.png';

	let playIcon = playIconUrl;

	if (playingTrackId === track.id) {
		if (trackLoaded && playing) {
			playIcon = pauseIconUrl;
		} else if (trackLoaded && !playing) {
			playIcon = playIconUrl;
		} else {
			playIcon = loadingIconUrl;
		}
	}

	const trackImageUrl = track.artwork_url
		? track.artwork_url
		: track.publisher.avatar_url;

	// for some reasion FireLike size must be set in CSS*
	return (
		<div className="thumbnail track-banner">
			<div className="left-side">

				<div className="track-title-container">
					<h2 className="track-title"> {track.name} </h2>
				</div>

				<Link to={`/publishers/${track.publisher.id}`}>
					<h3 className="clickable-banner-metadata">{track.publisher.name} </h3>
					{' '}
				</Link>

				<div className="artwork-wrapper">
					<img src={trackImageUrl} className="artwork-icon" />
					<img
						onClick={() => handleTrackClick(track.id, 'play')}
						src={playIcon}
						className="artwork-play"
					/>
				</div>

			</div>
			<div className="right-side">
				<TagList tagList={track.top_tags.slice(0, 5)} />

				<TrackBadge track={track} size={20} />

				<div className="track-banner-icons-container">
					<div className="track-item-icon">
						<a href={track.permalink_url} target="_blank">
							<FontAwesome.FaSoundcloud
								size={43}
								color="aliceblue"
								className="soundcloud-png"
							/>
						</a>
					</div>

					{children}
				</div>
			</div>
		</div>
	);
};

export default TrackBanner;
