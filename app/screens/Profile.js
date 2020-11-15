import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import styles from '../styles/global';

export default class Profile extends PureComponent {
	render() {
		return (
			<View style={styles.root}>
				<Text>Hello Profile </Text>
			</View>
		);
	}
}
