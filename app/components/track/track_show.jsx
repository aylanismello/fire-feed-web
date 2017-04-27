import React from 'react';
import TrackBanner from './track_banner';
import CuratorList from '../curator/curator_list';
import Loading from '../loading';

// There are two scenarios here. One is that
// a user got sent here via the internal react-router,
// which means their track is in the store.

// The second is that they refreshed or used another outside
// link or bookmark. In this case, we will have to hit the api
// and add this song somehwo to our redux store

// class TrackShow extends React.Component {
//
// 	componentWillMount() {
// 		this.props.updateFilters({ resource: 'tracks', id: this.props.id })
// 	}
//
//   render() {
//     if(this.props.loadingFeed) {
//       return <div>LOADING</div>
//     } else {
//       return (
//         <div className='container track-show'>
//           <PublisherBanner
//             user={this.props.publisher}
//           />
//
//           <FeedContainer />
//         </div>
//       )
//     }
//   }
//
// }


const TrackShow = ({ id, track, updateFilters,
	updateTrackId, playing, trackLoaded,
	playingTrackId, handleTrackClick }) => {
	let childElements;

	if(!track) {
		updateTrackId(id);
		updateFilters({id});

		return (
			<Loading />
		);

	} else {

	// if we try to make this a link ppl could share,
	// then we have to hit up the tracks api
	// in case we don't have the track in our redux store

		return (
			<div className="container track-show">
				<TrackBanner
					track={track}
					playing={playing}
					trackLoaded={trackLoaded}
					playingTrackId={playingTrackId}
					handleTrackClick={handleTrackClick}
				 />
				<CuratorList
					track={track}
				/>
			</div>
		)
	}

};

export default TrackShow;
