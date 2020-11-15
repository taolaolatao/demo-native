import React from 'react';
import { Button, View } from 'react-native';

export default function Navbar({ navigation }) {
	return (
		<View>
			<Button onPress={() => navigation.navigate('Home')} title="Go Home" />
			<Button onPress={() => navigation.navigate('Feed')} title="Go Feed" />
			<Button
				onPress={() => navigation.navigate('Profile')}
				title="Go Profile"
			/>
			<Button onPress={() => navigation.navigate('Upload')} title="Go Upload" />
		</View>
	);
}
