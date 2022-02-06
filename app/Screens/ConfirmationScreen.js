import React from 'react'
import { StyleSheet, Text, TouchableOpacity, SafeAreaView, View, Button } from 'react-native'

import LocationMap from '../Components/LocationMap'
import ConfirmationCard from '../Components/ConfirmationCard'
import { Icon } from 'react-native-elements';

import colors from '../config/colors'

export default function ConfirmationScreen({ navigation, route }) {
    return (
        <SafeAreaView style={styles.container}>
            {/* <TouchableOpacity style={styles.topBar}>
                <View>
                    <Icon name="arrow-back" type="ionicon" color={colors.black} size={22} />
                </View>
                <Text style={styles.topBarText}>Patient Info</Text>
            </TouchableOpacity> */}
            <LocationMap />
            <ConfirmationCard requestData={route?.params.requestData} navigation={navigation} />
            {/* <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('ProfileScreen')}>
                <Text style={styles.buttonText}>
                    Confirm
                </Text>
            </TouchableOpacity> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    button: {
        width: "92%",
        backgroundColor: colors.secondary,
        alignItems: "center",
        padding: 10,
        borderRadius: 15,
    },
    buttonText: {
        fontWeight: "bold",
        fontSize: 18,
        color: colors.white
    },
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        // margin: 15,
        backgroundColor: "white"
    },
    confirmation: {
        flex: 3,
    },
    map: {
        flex: 5,
    },
    topBar: {
        width: '100%',
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    topBarText: {
        color: colors.black,
        fontSize: 18,
        fontWeight: '600',
        paddingLeft: 20
    },
})
