import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import ProfileHistoryElement from './ProfileHistoryElement'

export default function ProfileHistory() {
    return (
        <ScrollView style={styles.profileHistoryContainer}>
            <View style={styles.buttons}>
                <TouchableOpacity>
                    <Text style={styles.dontaions}>
                        Dontaions
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.requests}>
                        Requests
                    </Text>
                </TouchableOpacity>
            </View>{
                global.donationHistory?.map((dh, index) => {
                    return <ProfileHistoryElement data={dh} key={index} />
                })
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        width: '93%',
        justifyContent: 'space-evenly'

    },
    dontaions: {
        fontSize: 18,
        fontWeight: "600",
        textDecorationLine: 'underline',
        color: "#F44B4B"
    },
    requests: {
        fontSize: 18,
        fontWeight: "600",
        textDecorationLine: 'underline',
        color: "#DADADA"
    },
    profileHistoryContainer: {
        height: 340,
        width: '100%',
        paddingTop: 20
    },
})
