import React from 'react';
import PropTypes from 'prop-types';
import { Container, Header, Icon, Segment } from 'semantic-ui-react';
import FeedContainer from '../feed/feed_container';

class Home extends React.Component {
	componentWillMount() {
		this.props.updateFilters({ resource: 'tracks', sortType: 'influential' });
	}

	render() {
		return (
			<Container className="main-content">
				<Segment padded basic>
					<Header as="h1">
						<Icon name="music" />
						<Header.Content>Explore</Header.Content>
					</Header>

				</Segment>
				<FeedContainer />
			</Container>
		);
	}
}

const { func, instanceOf, objectOf } = PropTypes;
Home.propTypes = {
	updateFilters: func.isRequired
};

export default Home;
