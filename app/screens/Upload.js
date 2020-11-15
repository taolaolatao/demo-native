import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import styles from '../styles/global';

export default class Upload extends PureComponent {
	render() {
		return (
			<View style={styles.root}>
				<Text>Hello Upload </Text>
			</View>
		);
	}
}
