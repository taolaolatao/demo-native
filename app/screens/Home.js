import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Button,
	TextInput,
	TouchableOpacity,
} from 'react-native';
import { auth, database } from '../../config';

export default function Home({ navigation }) {
	const [isLogin, setIsLogin] = useState(false);
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				setIsLogin(true);
			} else {
				setIsLogin(false);
			}
		});

		console.log(database.ref('/users'));

		database.ref('refName').once('value', (snapshot) => {
			console.log(snapshot);
		});
	}, []);

	const registerUser = () => {
		auth
			.createUserWithEmailAndPassword('admin@vhm.com', 'Admin@123')
			.then((user) => console.log(user))
			.catch((err) => console.error(err));
	};

	const login = async () => {
		if (!email || !pass) {
			alert('You need enter email & password');
			return;
		}

		try {
			const user = await auth.signInWithEmailAndPassword(email, pass);
			console.log(user);
		} catch (error) {
			alert(error.message);
		}
	};

	const logOut = () => auth.signOut();

	return (
		<View style={styles.container}>
			<Text style={styles.heading}>Welcome to My APP!!</Text>
			{isLogin ? (
				<View>
					<Text>Sensitive Data</Text>
					<Button title="Logout" onPress={logOut} />
				</View>
			) : (
				<View style={styles.frm}>
					<Text> Email: </Text>
					<TextInput
						textContentType="username"
						style={styles.input}
						value={email}
						onChangeText={(email) => setEmail(email)}
					/>
					<Text> Password: </Text>
					<TextInput
						style={styles.input}
						secureTextEntry
						value={pass}
						onChangeText={(pass) => setPass(pass)}
					/>
					<TouchableOpacity style={styles.btn} onPress={login}>
						<Text style={styles.text}>Login</Text>
					</TouchableOpacity>
					{/* <Button title="Register with google" onPress={registerUser} /> */}
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
	},
	heading: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 20,
	},
	frm: {
		width: '50%',
	},
	input: {
		borderWidth: 1,
		borderColor: '#000',

		borderBottomWidth: 1,
		borderBottomColor: 'black',
		borderStyle: 'solid',
	},
	text: {
		color: 'white',
		textAlign: 'center',
	},
	btn: {
		backgroundColor: '#ff7675',
		borderRadius: 10,
		textAlign: 'center',
		padding: 10,
		marginTop: 10,
	},
});
