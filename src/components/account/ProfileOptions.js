import { StyleSheet, Text, View } from 'react-native';
import { Icon, ListItem } from 'react-native-elements';
import { map } from 'lodash';
import { Modal } from '../common/Modal';
import { useState } from 'react';

export const ProfileOptions = () => {
	const [showModal, setShowModal] = useState(false);
	const [conteined, setConteined] = useState(null);

	const onClose = () => {
		setShowModal((prevState) => !prevState);
	};

	const selectComponent = (key) => {
		if (key === 'displayName') {
			setConteined(<Text>displayName</Text>);
		}

		if (key === 'password') {
			setConteined(<Text>password</Text>);
		}

		onClose();
	};

	const optionsMenu = getOptionsMenu(selectComponent);

	return (
		<View>
			{map(optionsMenu, (menu, index) => (
				<ListItem key={index} onPress={menu.onPress}>
					<Icon
						type={menu.typeIcon}
						name={menu.iconLeft}
						color={menu.colorIcon}
					/>
					<ListItem.Content>
						<ListItem.Title>{menu.title}</ListItem.Title>
					</ListItem.Content>
					<Icon
						type={menu.typeIcon}
						name='chevron-right'
						color={menu.colorIcon}
					/>
				</ListItem>
			))}
			<Modal visible={true} close={onClose}>
				{conteined}
			</Modal>
		</View>
	);
};

const getOptionsMenu = (selectComponent) => {
	return [
		{
			title: 'Cambiar nombre',
			typeIcon: 'material-community',
			nameIconLeft: 'account-circle',
			colorIcon: '#ccc',
			nameIconRight: 'chevron-right',
			onPress: () => selectComponent('displayName'),
		},
		{
			title: 'Cambiar contraseña',
			typeIcon: 'material-community',
			nameIconLeft: 'lock-reset',
			colorIcon: '#ccc',
			nameIconRight: 'chevron-right',
			onPress: () => selectComponent('password'),
		},
	];
};

const styles = StyleSheet.create({});
