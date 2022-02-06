import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements';

import RequestDiscription from '../Components/RequestDiscription';
import RequestDiscriptionAmount from '../Components/RequestDiscriptionAmount';
import colors from '../config/colors'

export default function RequestDiscriptionScreen({ navigation, route }) {
    const requestData = route?.params.requestData
    return (
        <SafeAreaView style={styles.discriptionContainer}>

            {/* <View style={styles.weirdPadding}>
                <TouchableOpacity style={styles.topBar}>
                    <View>
                        <Icon name="arrow-back" type="ionicon" color={colors.white} size={22} />
                    </View>
                    <Text style={styles.topBarText}>Home</Text>
                </TouchableOpacity>
            </View> */}
            <View style={styles.weirdPadding}>
                <RequestDiscription requestData={route?.params.requestData} />
            </View>
            <View style={styles.weirdPadding}>
                <RequestDiscriptionAmount requestData={route?.params.requestData} />
            </View>
            <View style={styles.weirdPadding}>
                <TouchableOpacity style={styles.button}
                    onPress={() => navigation.navigate('ConfirmationScreen', { requestData })}>
                    <Text style={styles.buttonText}>
                        Accept
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    button: {
        width: "100%",
        backgroundColor: colors.secondary,
        alignItems: "center",
        padding: 15,
        borderRadius: 15,
    },
    buttonText: {
        fontWeight: "bold",
        fontSize: 18,
        color: colors.white
    },
    discriptionContainer: {
        backgroundColor: colors.primary,
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-evenly",
    },
    topBar: {
        width: '100%',
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    topBarText: {
        color: colors.white,
        fontSize: 18,
        fontWeight: '600',
        paddingLeft: 20
    },
    weirdPadding: {
        padding: 25
    }

})
