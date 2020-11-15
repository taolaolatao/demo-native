import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import styles from '../styles/global';

export default class Feed extends PureComponent {
	render() {
		return (
			<View style={styles.root}>
				<Text>Hello Feed </Text>
			</View>
		);
	}
}
