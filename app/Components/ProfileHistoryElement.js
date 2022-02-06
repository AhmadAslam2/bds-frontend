import React from 'react'
import { StyleSheet, Text, View, } from 'react-native'
import { Icon } from 'react-native-elements';

import colors from '../config/colors';

export default function ProfileHistoryElement({ data }) {
    return (
        <View style={styles.element}>
            <View style={styles.dateContainer}>
                <Text style={styles.month}>
                    Nov
                </Text>
                <Text style={styles.date}>
                    {data?.date.toString()}
                </Text>
            </View>
            <View>
                <View>
                    <Text style={styles.hospital}>
                        {data?.location || "N/A"}
                    </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="blood-drop" type="fontisto" color={"grey"} size={12} />
                    <Text style={styles.amount}>{data?.amount} pint of blood</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    amount: {
        fontSize: 12,
        color: "grey",
        paddingLeft: 5
    },
    element: {
        width: '90%',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        paddingLeft: 25,
        paddingTop: 25,
        paddingRight: 25
    },
    dateContainer: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    date: {
        fontSize: 48,
        color: "#413F89",
        letterSpacing: 0,
        lineHeight: 48
    },
    dot: {
        fontSize: 48,
        color: "#413F89"
    },
    hospital: {
        fontSize: 18,
        fontWeight: '600'
    },
    month: {
        fontSize: 12,
        color: "#413F89",
        letterSpacing: 0,
    },

})
