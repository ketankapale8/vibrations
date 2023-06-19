import * as React from 'react';
import {View, Button , Pressable} from 'react-native'
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faFilter } from '@fortawesome/free-solid-svg-icons'
import { COLORS, SIZES } from '../../constants';


const AppBar = ({setModalVisible, modalVisible}) => (
 <View style={styles.top}>
 {/* <Appbar.Action icon="apple" onPress={() => console.log('Pressed label')} /> */}
    {/* <Button icon={faFilter} onPress={() => setModalVisible(!modalVisible)} /> */}
    <Pressable onPress={() => setModalVisible(!modalVisible)} >
      <View style={{paddingLeft: SIZES.padding+140}}>
        <FontAwesomeIcon icon={faFilter} style={{width:'45px', height:'30px', color : COLORS.black }} size={40}  />
      </View>
    </Pressable>
  </View>
 );

export default AppBar

const styles = StyleSheet.create({
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    alignContent:'center',
    paddingLeft:'45%',
    // backgroundColor: COLORS.white,
    marginTop: 0,
  },
});