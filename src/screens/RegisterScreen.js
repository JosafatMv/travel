import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native-elements';
import { RegisterForm } from '../components/account/registerForm';

export const RegisterScreen = () => {
	return (
		<View>
			<Image
				source={require('../../assets/imagenes/messi.jpg')}
				style={styles.logo}
			/>
			<View style={styles.viewForm}>
				<RegisterForm />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	logo: {
		width: '100%',
		height: 150,
		resizeMode: 'contain',
		marginTop: 30,
	},
	viewForm: {
		marginHorizontal: 40,
	},
});
