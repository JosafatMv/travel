import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native-elements';

import { useNavigation } from '@react-navigation/native';

export const LoginScreen = () => {
	const navigation = useNavigation();

	const irARegistro = () => {
		navigation.navigate('registerS');
	};

	return (
		<View>
			
			<Text>FORMULARUIO DE LOGIN</Text>
			<View>
				<Text onPress={irARegistro}>Registrate</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	
});
