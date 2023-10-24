import { View, Text } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

export default function Icons(){
    return(
        <View style={{flex: 1, alignItems: 'center'}}> 
            <Text> Icones na aplicação </Text>
            <SimpleLineIcons name='magnifier' size={24} color="black" />
        </View>
    )
}