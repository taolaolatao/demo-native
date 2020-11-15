import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import styles from '../styles/global';

export default class Profile extends PureComponent {
	render() {
		return (
			<View style={styles.root}>
				<View style={styles.title}>
					<Text>Profile</Text>
				</View>
			</View>
		);
	}
}
