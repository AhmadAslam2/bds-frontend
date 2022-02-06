import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements';

import colors from '../config/colors'

export default function locationCard() {
    return (
        <View style={styles.locationCard}>
            <Text style={styles.locationText}>Location</Text>
            <View style={styles.location}>
                <Text style={styles.city}>
                    Lahore
                </Text>
                <Text>
                    <Icon name="location" type="ionicon" color={colors.secondary} />
                </Text>
            </View>
            <View style={{ borderBottomColor: "grey", borderBottomWidth: 1 }} />
            <View style={styles.bloodGroup}>
                <Text style={styles.chooseBlood}>Choose your Blood Group</Text>
                <View style={styles.bloodGroupLetterContainer}>
                    <Text style={styles.bloodGroupLetter}> O-</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    bloodGroup: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 10
    },
    bloodGroupLetterContainer: {
        height: 60,
        width: 70,
        borderRadius: 20,
        backgroundColor: "#B6C6FF",
        justifyContent: "center",
        alignItems: "center"
    },
    bloodGroupLetter: {
        color: colors.white,
        fontSize: 24,
        fontWeight: "bold",
    },
    city: {
        color: colors.white,
        fontSize: 24,
        fontWeight: "bold",
    },
    chooseBlood: {
        color: "#B6C6FF"
    },
    locationCard: {
        backgroundColor: colors.primary,
        padding: 20,
        margin: 10,
        borderRadius: 15,
    },
    location: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 10
    },
    locationText: {
        color: "#B6C6FF",
        fontSize: 14,
        paddingBottom: 10
    }
})
