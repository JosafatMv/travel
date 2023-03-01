import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailsScreen } from '../screens/DetailsScreen';
import { IndexScreen } from '../screens/IndexScreen';
import { InformationScreen } from '../screens/InformationScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { DetailsStack } from './DetailsStack';
import { IndexStack } from './IndexStack';

import { Button, Icon, ThemeProvider } from 'react-native-elements';

// const Drawer = createDrawerNavigator();

// export const AppNavigation = () => {
// 	return (
// 		<Drawer.Navigator>
// 			<Drawer.Screen
// 				name='index'
// 				component={IndexScreen}
// 				options={{ title: 'Inicio' }}
// 			/>
// 			<Drawer.Screen
// 				name='details'
// 				component={DetailsScreen}
// 				options={{ title: 'Detalles' }}
// 			/>
// 			<Drawer.Screen
// 				name='information'
// 				component={InformationScreen}
// 				options={{ title: 'Informacion' }}
// 			/>
// 		</Drawer.Navigator>
// 	);
// };

const Tab = createBottomTabNavigator();
export const AppNavigation = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarActiveTintColor: 'red',
				tabBarInactiveTintColor: 'green',
				tabBarIcon: ({ color, size }) => showIcons(route, color, size),
			})}
		>
			<Tab.Screen
				name='index'
				component={IndexStack}
				options={{ title: 'Inicio', headerShown: false }}
			/>

			<Tab.Screen
				name='details'
				component={DetailsStack}
				options={{ title: 'Detalles' }}
			/>

			<Tab.Screen
				name='information'
				component={InformationScreen}
				options={{ title: 'Informacion', headerShown: true }}
			/>
		</Tab.Navigator>
	);
};

const showIcons = (route, color, size) => {
	let icon;

	if (route.name === 'index') {
		icon = 'home-circle';
	}

	if (route.name === 'details') {
		icon = 'account-circle';
	}

	if (route.name === 'information') {
		icon = 'information';
	}

	return (
		<Icon type='material-community' name={icon} size={size} color={color} />
	);
};
