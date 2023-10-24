import {View, Text} from 'react-native';
import { Header } from '../../components/Header';
import { Icons } from '../Icons';

export default function Home(){
    return(
        <View style={{ flex: 1}}> 
            <Header color={'red'} />
          
        </View>
    );
}