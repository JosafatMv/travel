import { StyleSheet, Text, View } from 'react-native';
import { Button, Icon, Input } from 'react-native-elements';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

export const LoginForm = () => {
	const [password, setPassword] = useState(false);

	const showPass = () => setPassword(!password);

	return (
		<View style={styles.viewForm}>
			<Input
				placeholder='Correo Electrónico'
				containerStyle={styles.input}
				rightIcon={
					<Icon
						type='material-community'
						name='at'
						iconStyle={styles.icon}
					/>
				}
			/>
			<Input
				placeholder='Contraseña'
				containerStyle={styles.input}
				secureTextEntry={password ? false : true}
				rightIcon={
					<Icon
						type='material-community'
						name={password ? 'eye-off-outline' : 'eye-outline'}
						iconStyle={styles.icon}
						onPress={showPass}
					/>
				}
			/>
			<Button
				title='Registrar'
				containerStyle={styles.containerBtn}
				buttonStyle={styles.btn}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	viewForm: {
		marginTop: 30,
	},
	input: {
		width: '100%',
		marginTop: 20,
	},
	icon: {
		color: '#c1c1c1',
	},
	containerBtn: {
		width: '95%',
		marginTop: 20,
	},
	btn: {
		backgroundColor: '#0D5BD7',
	},
});
