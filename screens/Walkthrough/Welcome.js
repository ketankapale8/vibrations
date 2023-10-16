import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import { TextButton } from "../../component/TextButton.js";
import { COLORS, FONTS, SIZES, images } from '../../constants/index.js';

const Welcome = ({ navigation }) => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.light
            }}
        >
            {/* Logo & Title */}
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                

                {/* <Text style={{ marginTop: SIZES.padding, ...FONTS.h1 , color : COLORS.dark }}>
                    Welcome to
                </Text>
                <Text style={{ marginTop: SIZES.base, ...FONTS.h1 ,color: COLORS.dark}}>
                    Paperless
                </Text> */}
            </View>

            {/* Footer Buttons */}
            <View
                style={{
                    paddingHorizontal: SIZES.padding,
                    marginBottom: 30
                }}
            >
                <TextButton
                    contentContainerStyle={{
                        height: 50,
                        borderRadius: SIZES.radius
                    }}
                    label="Get Started"
                    onPress={() => console.log('pressed')}
                />

                <TextButton
                    contentContainerStyle={{
                        height: 50,
                        marginTop: SIZES.base,
                        backgroundColor: null
                    }}
                    label="Already have an account"
                    labelStyle={{
                        color: COLORS.primary
                    }}
                    // onPress={() => navigation.navigate("login")}
                //onPress
                />
            </View>
        </View>
    )
}

export default Welcome;