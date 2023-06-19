import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Modal,
  Button,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import RadioButton from './RadioButton'
import {initialFilter} from './InitialFilter.js';
import { COLORS , SIZES, FONTS} from '../../constants';




const CustomModal = ({ modalVisible, setModalVisible, allQuestions, intermediateFilter, setIntermediateFilter, quefilterResult, setFilter }) => {


  function renderButton() {
    return (
        <View style={{ margin: SIZES.padding * 2 }}>
            <TouchableOpacity
                style={{
                    height: 60,
                    backgroundColor: COLORS.black,
                    borderRadius: SIZES.radius / 1.5,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={() => {
                  setModalVisible(!modalVisible)
                  setFilter(intermediateFilter)
        
        
                }}
            >
                <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Apply</Text>
            </TouchableOpacity>
        </View>
    )
}

function renderClearButton() {
  return (
      <View style={{ margin: SIZES.padding * 2 }}>
          <TouchableOpacity
              style={{
                  height: 60,
                  backgroundColor: COLORS.black,
                  borderRadius: SIZES.radius / 1.5,
                  alignItems: 'center',
                  justifyContent: 'center'
              }}
              onPress={() => {
                setModalVisible(!modalVisible)
                setFilter(initialFilter)
                setIntermediateFilter(initialFilter)
              }}
          >
              <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Clear</Text>
          </TouchableOpacity>
      </View>
  )
}



  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalVisible}
      style={{ flex: 1 }}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <SafeAreaView style={{ flex: 1, padding: 20 }}>
        <View style={{ marginBottom: 20, paddingHorizontal: 30 }}>
          <Text style={{ fontSize: 26 }}>Filtering Fruits</Text>
        </View>

        <RadioButton handleChange={(questionTag) => setIntermediateFilter({...intermediateFilter, questionTag: questionTag})} selected={intermediateFilter.questionTag} quefilterResult={quefilterResult}/>
        {/* <Button title="Apply" 
           style={{
            height: 60,
            backgroundColor: COLORS.black,
            borderRadius: SIZES.radius / 1.5,
            alignItems: 'center',
            justifyContent: 'center'
        }}
        
        onPress={() => {
          setModalVisible(!modalVisible)
          setFilter(intermediateFilter)


        }} /> */}
        {renderButton()}
        {renderClearButton()}
        {/* <Button title="Clear" onPress={() => {
          setModalVisible(!modalVisible)
          setFilter(initialFilter)
          setIntermediateFilter(initialFilter)
        }} /> */}
      </SafeAreaView>
    </Modal>
  );
};

export default CustomModal;