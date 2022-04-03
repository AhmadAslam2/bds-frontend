import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements';

import colors from '../config/colors'

export default function locationCard() {
    return (
        <>
            <View style={styles.ngoCard}>

                <Text style={{ ...styles.city, paddingBottom: 10 }}>Sundas Foundation</Text>
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
                    <Text style={styles.popularity}>
                        Popularity:
                        <Text style={{ ...styles.popularity, color: "#506EDA", fontWeight: "bold" }}>
                            430
                        </Text>
                    </Text>
                    <TouchableOpacity style={{ alignSelf: "center" }}>
                        <Icon name="add-circle-outline" type="ionicon" color={colors.secondary} />

                    </TouchableOpacity>
                </View>
            </View>
        </>
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
        color: colors.primary,
        fontSize: 24,
        fontWeight: "bold",
    },
    popularity: {
        color: "#B6C6FF"
    },
    ngoCard: {
        backgroundColor: colors.tertiary,
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
    },
    requestListText: {
        color: "#7D859D",
        fontSize: 18,
        fontWeight: "normal",
        paddingLeft: 20,
        paddingTop: 5
    },
})
