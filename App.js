import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './app/screens/Home';
import Feed from './app/screens/Feed';
import Upload from './app/screens/Upload';
import Profile from './app/screens/Profile';

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				initialRouteName="Home"
				activeColor="#f0edf6"
				inactiveColor="#fff"
				tabBarOptions={{
					activeBackgroundColor: '#2d3436',
					activeTintColor: '#fff',
					adaptive: true,
					keyboardHidesTabBar: true,
					activeTintColor: '#e91e63',
				}}
			>
				<Tab.Screen
					name="Home"
					component={Home}
					options={{
						tabBarLabel: 'Home',
						tabBarIcon: ({ color, size }) => (
							<MaterialCommunityIcons name="home" color={color} size={size} />
						),
					}}
				/>
				<Tab.Screen
					name="Feed"
					component={Feed}
					options={{
						tabBarLabel: 'Feed',
						tabBarIcon: ({ color, size }) => (
							<MaterialCommunityIcons
								name="newspaper"
								color={color}
								size={size}
							/>
						),
					}}
				/>
				<Tab.Screen
					name="Upload"
					component={Upload}
					options={{
						tabBarIcon: ({ color, size }) => (
							<MaterialCommunityIcons
								name="cloud-upload"
								color={color}
								size={size}
							/>
						),
					}}
				/>
				<Tab.Screen
					name="Profile"
					component={Profile}
					options={{
						tabBarLabel: 'Profile',
						tabBarIcon: ({ color, size }) => (
							<MaterialCommunityIcons
								name="account"
								color={color}
								size={size}
							/>
						),
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}
