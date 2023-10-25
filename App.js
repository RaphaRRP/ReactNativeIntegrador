import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from "./src/screens/Home";
import Icons from "./src/screens/Icons";
import Lists from "./src/screens/Lists"; 

const Stack = createNativeStackNavigator();

export default function App(){
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{
				headerShown: false, 
			}}>
				<Stack.Screen 
					name='Home'
					component={Home} 
				/>
				<Stack.Screen name='Icons' component={Icons}/>
				<Stack.Screen name='Lists' component={Lists}/> 
			</Stack.Navigator>
		</NavigationContainer>
	);
}