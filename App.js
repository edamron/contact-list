import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Profile from './screens/Profile';
import Contacts from './screens/Contacts';

const Stack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Contacts">
				<Stack.Screen name="Contacts" component={Contacts} />
				<Stack.Screen name="Profile" component={Profile} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
