import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import colors from '../config/colors'

export default function ProfilePicture() {
    return (
        <View style={styles.pic}>
            <Text style={styles.profileName}>
                Ahmad Aslam
            </Text>
            <TouchableOpacity style={styles.editButton}>
                <Text>Edit</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    pic: {
        height: 255,
        width: '94%',
        backgroundColor: "black",
        borderRadius: 15,
        justifyContent: 'flex-end',
        padding: 20,
        marginTop: 20
    },
    profileName: {
        fontSize: 24,
        color: colors.white
    },
    editButton: {
        height: 30,
        width: 70,
        backgroundColor: "#DADADA",
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 17
    },
})
