import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Icon, Avatar } from 'react-native-elements'

import colors from '../config/colors'

export default function RequestDiscription({ requestData, userDetails }) {
    return (
        <View style={styles.RequestDetailContainer}>
            <TouchableOpacity style={{ alignSelf: "flex-end" }}>
                <Icon name="share-social-outline" type="ionicon" color='white' />
            </TouchableOpacity>
            <Avatar rounded
                // title={userDetails?.firstName[0] + userDetails?.lastName[0]} 
                style={styles.avatar} />
            <Text style={styles.receiverName}>{userDetails?.firstName} {userDetails?.lastName}</Text>
            <Text style={styles.requestId}>
                #{Math.floor(Math.random() * 90000) + 10000}
            </Text>
            <Text style={styles.RequestDetail}>
                {requestData?.description || "N/A"}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    avatar: {
        width: 100,
        height: 100,
        backgroundColor: colors.secondary,
        borderRadius: 100
    },
    RequestDetailContainer: {
        flexDirection: 'column',
        width: "100%",
        height: 250,
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    receiverName: {
        fontSize: 18,
        color: colors.white,
        fontWeight: '600'
    },
    requestId: {
        fontSize: 18,
        color: colors.secondary,
        fontWeight: '600'
    },
    RequestDetail: {
        fontSize: 18,
        color: '#DADADA',
        textAlign: "center",

    }
})
