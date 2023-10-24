import Home from "./src/screens/home";
import Icons from "./src/screens/Icons";
import List from "./src/screens/List";

export default function App(){
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name='Home' component={Home}/>
				<Stack.Screen name='Icons' component={Incons}/>
				<Stack.Screen name='Lists' component={Lists}/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}