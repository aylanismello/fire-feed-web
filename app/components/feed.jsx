import React from 'react';

// const dummyImages = [
// 	'https://i1.sndcdn.com/artworks-000201810345-8gnucx-large.jpg',
// 	'https://i1.sndcdn.com/artworks-000201417032-j18ns2-large.jpg',
// 	'https://i1.sndcdn.com/artworks-000201298954-kdopn1-large.jpg',
// 	'https://i1.sndcdn.com/artworks-000201810345-8gnucx-large.jpg',
// 	'https://i1.sndcdn.com/artworks-000201417032-j18ns2-large.jpg',
// 	'https://i1.sndcdn.com/artworks-000201298954-kdopn1-large.jpg',
// 	'https://i1.sndcdn.com/artworks-000201810345-8gnucx-large.jpg',
// 	'https://i1.sndcdn.com/artworks-000201417032-j18ns2-large.jpg',
// 	'https://i1.sndcdn.com/artworks-000201298954-kdopn1-large.jpg',
// 	'https://i1.sndcdn.com/artworks-000201810345-8gnucx-large.jpg',
// 	'https://i1.sndcdn.com/artworks-000201417032-j18ns2-large.jpg',
// 	'https://i1.sndcdn.com/artworks-000201298954-kdopn1-large.jpg'
// ];

const Feed = ({ tracks }) => {
	let childElements;
	if(tracks.length === 0) {

		childElements = (
			<div>
				<h1>
					LOADING
				</h1>
			</div>
		);
	} else {

		childElements = tracks.map((element, idx) => {
			return (
				<div className="row">
					<div className="col-sm-6 col-md-4 track-container">
						<div className="thumbnail">
							<div className="artwork-wrapper">
								<img
									src={element.artwork_url}
									className="artwork-icon"
								/>
								<img
									src='http://wptf.com/wp-content/uploads/2014/05/play-button.png'
									className="artwork-play"
								/>
								<span className="glyphicon glyphicon-play-circle"/>
							</div>
							<div className="caption">
								<h3 className="track-title">{element.name}</h3>
								<p>Posted by {element.curators.length} curators</p>
								<p>
									<div className="fire-emoji-container">
										<img
											className="fire-emoji"
											src="http://pix.iemoji.com/images/emoji/apple/ios-9/256/fire.png"/>
									</div>
									{/* <a href="#" className="btn btn-default" role="button">Button</a> */}
								</p>
							</div>
						</div>
					</div>
				</div>


			);
		});

	}
	return (
		<div className="feed-container">
			{childElements}
		</div>
	);

};

export default Feed;
