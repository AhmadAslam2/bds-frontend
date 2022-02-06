import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon, Avatar } from 'react-native-elements'

import colors from '../config/colors'

export default function RequestDiscription({ requestData }) {
    return (
        <View style={styles.RequestDetailContainer}>
            <Avatar rounded title="MB" style={styles.avatar} />
            <Text style={styles.receiverName}>{requestData?.donorName}</Text>
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
        width: 120,
        height: 120,
        backgroundColor: colors.secondary,
        borderRadius: 100
    },
    RequestDetailContainer: {
        flexDirection: 'column',
        width: "100%",
        height: 295,
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
