import { View, Text , StyleSheet } from 'react-native'
import React from 'react';
import { Icon } from '@rneui/themed';
import { Header } from '@rneui/themed';
import { ThemeProvider } from '@rneui/themed';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars ,faCircleUser} from '@fortawesome/free-solid-svg-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { COLORS, SIZES, FONTS, icons, images } from "../../constants";
import { withTheme } from 'react-native-elements';

const theme = {
     Header : {
    },
  };
  

const CommonHeader = ({title ,menu}) => {
  return (
    <SafeAreaProvider>
            {/* <ThemeProvider theme={theme}> */}
                <Header 
                    backgroundColor={COLORS.primary2}
                    style={{width:'100%'}}
                leftComponent={
                    <FontAwesomeIcon icon={ faBars }size={26} color='white'/>

                }
                rightComponent={
                    <View style={styles.headerRight}>
                        <TouchableOpacity 
                        // onPress={docsNavigate}
                        
                        >
                        <FontAwesomeIcon icon={ faCircleUser } size={26} color='white'/>
                        </TouchableOpacity>
                    
                    </View>
                }
                centerComponent={{ text: `${title}`, style: styles.heading }}
                />

            {/* </ThemeProvider> */}

    </SafeAreaProvider>
  )
}

export default CommonHeader;

const styles = StyleSheet.create({
    headerContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'red',
      marginBottom: 20,
      width: '100%',
      paddingVertical: 5,
    },
    heading: {
      color: 'white',
      fontSize: 22,
      fontWeight: 'bold',
    },
    headerRight: {
      display: 'flex',
      flexDirection: 'row',
    //   marginTop: 5,
    },
    subheaderText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    });