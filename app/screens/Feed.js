import React, { PureComponent } from 'react';
import { Text, View, Image, FlatList, StyleSheet } from 'react-native';
import { database } from '../../config';
import styles from '../styles/global';

export default class Feed extends PureComponent {
	state = {
		refresh: false,
		loading: true,
		photoFeed: [0, 1, 2, 3, 4],
	};

	componentDidMount() {
		this.loadFeed();
	}

	loadFeed = () => {
		this.setState({
			refresh: true,
			photoFeed: [],
		});

		database
			.ref('refName/Photos')
			.orderByChild('posted')
			.once('value', async (snapshot) => {
				const data = snapshot.val();
				if (!data) return;

				let photoFeed = [];

				for (const key in data) {
					const photo = data[key];
					const users = await database
						.ref('refName/Users')
						.child(photo.author)
						.once('value');
					const user = users.val();
					if (user) {
						photoFeed = [
							...photoFeed,
							{
								_id: key,
								url: photo.uri,
								caption: photo.caption,
								posted: photo.posted,
								author: user.username,
							},
						];
					}
				}

				if (photoFeed.length) {
					this.setState({
						photoFeed,
						refresh: false,
					});
				}
			});
	};

	loadMore = () => {
		this.setState({ refresh: true });
		setTimeout(() => {
			this.setState({ refresh: false, photoFeed: [5, 6, 7, 8, 9] });
		}, 1000);
	};

	render() {
		const { refresh, photoFeed } = this.state;

		return (
			<View style={styles.root}>
				<View style={styles.title}>
					<Text>New Feed</Text>
				</View>

				<FlatList
					refreshing={refresh}
					onRefresh={this.loadMore}
					keyExtractor={(_, index) => index.toString()}
					data={photoFeed}
					style={stylesLocal.list}
					renderItem={({ index }) => (
						<View key={index} style={stylesLocal.post}>
							<View style={stylesLocal.titlePost}>
								<Text>Time Ago</Text>
								<Text>@VHM</Text>
							</View>

							<View>
								<Image
									source={{
										uri: `https://source.unsplash.com/random/500x${Math.floor(
											Math.random() * 800 + 500
										)}`,
									}}
									style={stylesLocal.picture}
								/>
							</View>

							<View style={stylesLocal.comment}>
								<Text>Caption tab here...</Text>
								<Text>View Comments...</Text>
							</View>
						</View>
					)}
				/>
			</View>
		);
	}
}

const stylesLocal = StyleSheet.create({
	picture: {
		resizeMode: 'cover',
		height: 275,
		width: '100%',
	},
	list: {
		flex: 1,
		backgroundColor: '#eee',
	},
	titlePost: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 5,
	},
	post: {
		marginBottom: 15,
		justifyContent: 'space-between',
		borderColor: 'rgba(0,0,0,.2)',
		borderBottomWidth: 2,
		backgroundColor: '#dcdde1',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
	},
	comment: {
		padding: 10,
	},
});
