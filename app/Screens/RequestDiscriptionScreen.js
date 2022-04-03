import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements';
import call from 'react-native-phone-call'

import RequestDiscription from '../Components/RequestDiscription';
import RequestDiscriptionAmount from '../Components/RequestDiscriptionAmount';
import colors from '../config/colors'
import { useNavigation, useRoute } from '@react-navigation/native';


export default function RequestDiscriptionScreen() {
    const route = useRoute()
    const navigation = useNavigation()
    const requestData = route?.params?.requestData
    const userDetails = route?.params?.userDetails
    const args = {
        number: '//0321-4324862', // String value with the number to call
        prompt: true // Optional boolean property. Determines if the user should be prompt prior to the call 
    }
    return (

        <SafeAreaView style={styles.discriptionContainer}>
            <View style={styles.weirdPadding}>
                <RequestDiscription userDetails={userDetails} requestData={route?.params.requestData} />
            </View>
            <View style={styles.weirdPadding}>
                <RequestDiscriptionAmount requestData={route?.params.requestData} />
            </View>
            <TouchableOpacity style={styles.contactNumberContainer} onPress={() => {
                call(args).catch(console.error)
            }}>

                <Icon name="call" type="ionicon" color="#2cfa1c" size={25} style={{ paddingRight: 10 }} />
                <Text style={{ color: "white", fontSize: 25 }}>
                    {userDetails?.contactNumber}
                </Text>
            </TouchableOpacity>
            <View style={styles.weirdPadding}>
                <TouchableOpacity style={styles.button}
                    onPress={() => navigation?.navigate('ConfirmationScreen', { requestData })}>
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
    contactNumberContainer: {
        flexDirection: "row",
        alignSelf: 'center',
        margin: 10
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
