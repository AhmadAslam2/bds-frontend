import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements';


import colors from '../config/colors'

export default function RequestDiscriptionAmount({ requestData }) {
    return (
        <View style={styles.amountContainer}>
            <Text style={styles.headingText}>Diagonosis</Text>
            <Text style={styles.descriptonText}>{requestData?.diagnosis || "N/A"}</Text>
            <Text style={styles.headingText}>Location</Text>
            <Text style={styles.descriptonText}>{requestData?.location || "N/A"}</Text>
            <View style={{ borderColor: "grey", borderWidth: 1, width: '100%' }} />
            <View style={{ flexDirection: 'row', justifyContent: "space-evenly", alignItems: 'center' }}>
                <View>
                    <Text style={styles.amountText}>Left</Text>
                    <Text style={styles.amountDescripton}>{requestData?.amountFilled}</Text>
                </View>
                <View>
                    <Icon name="blood-drop" type="fontisto" color={colors.secondary} size={80} />
                </View>
                <View>
                    <Text style={styles.amountText}>Need</Text>
                    <Text style={styles.amountDescripton}>{requestData?.amountNeeded}</Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    amountContainer: {
        height: 325,
        width: '100%',
        flexDirection: "column",
        justifyContent: "space-evenly",
        backgroundColor: "#4762C6",
        borderRadius: 15,
        padding: 20
    },
    headingText: {
        fontSize: 14,
        color: '#DADADA'
    },
    descriptonText: {
        fontSize: 18,
        color: colors.white,
        fontWeight: '600'
    },
    amountText: {
        fontSize: 18,
        color: '#DADADA'
    },
    amountDescripton: {
        fontSize: 35,
        color: colors.white,
        fontWeight: '600',
        paddingTop: 8
    },

})
