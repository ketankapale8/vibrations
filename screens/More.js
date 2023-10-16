import { View, Text , Image , StyleSheet} from 'react-native'
import React , {useState , useEffect} from 'react'
import { SIZES ,COLORS , FONTS} from '../constants';
import { useDispatch , useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import { logout } from '../redux/action';
import { ScrollView } from 'react-native-gesture-handler';

const More = ({navigation , route}) => {
  const { user, loading } = useSelector(state => state.auth);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout())
}

  return (
    <ScrollView>
        <View style={{width : SIZES.width }} >
       

          <Button style={{color:COLORS.lightpurple}} onPress={logoutHandler}>Logout</Button>
        </View>

    </ScrollView>

  )
}



export default More