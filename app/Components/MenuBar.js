import React, { useState } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';


import colors from '../config/colors';
import RequestButton from './RequestButton';


export default function menuBar({ navigation, setLoading, }) {
    // const [color, SetColor] = useState('grey')
    // const toggleColor = () => {
    //     SetColor('blue')
    // }
    return (
        <View style={styles.menuBar}>
            <View style={styles.div1}>
                <TouchableOpacity onPress={() => navigation?.navigate('LandingScreen')}>
                    <Icon name="home" type="ionicon" color='grey' />
                </TouchableOpacity>
                <TouchableOpacity >
                    <Icon name="notifications" type="ionicon" color='grey' />
                </TouchableOpacity>
            </View>
            <View style={styles.div2}>
                <TouchableOpacity >
                    <Icon name="chatbubble-ellipses" type="ionicon" color='grey' />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation?.navigate('ProfileScreen')}>
                    <Icon name="person" type="ionicon" color='grey' />
                </TouchableOpacity>
            </View>
            <RequestButton setLoading={setLoading} />
        </View>
    )
}

const styles = StyleSheet.create({
    active: {
        color: "#4667D7"
    },
    menuBar: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        height: 65,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 14,
    },
    div1: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-evenly",
    },
    div2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-evenly",
    },

})
