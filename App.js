import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Home from './app/screens/Home';
import Feed from './app/screens/Feed';
import Upload from './app/screens/Upload';
import Profile from './app/screens/Profile';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				initialRouteName="Home"
				activeColor="#f0edf6"
				inactiveColor="#fff"
				// barStyle={{ backgroundColor: '#694fad' }}
				labeled={true}
			>
				<Tab.Screen
					name="Home"
					component={Home}
					options={{ tabBarLabel: 'Home', title: 'Home Screen' }}
				/>
				<Tab.Screen
					name="Feed"
					component={Feed}
					options={{ tabBarLabel: 'Feed' }}
				/>
				<Tab.Screen name="Upload" component={Upload} />
				<Tab.Screen
					name="Profile"
					component={Profile}
					options={{ tabBarLabel: 'Profile' }}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}
