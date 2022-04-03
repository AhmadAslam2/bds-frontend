import moment from 'moment';
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements';


export default function ProfileHistoryElement({ navigation, data }) {
    const requestData = data
    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate("RequestDescriptionScreen", { requestData })
            }}
            style={{ flexDirection: 'row', alignItems: "center" }}>
            <View style={styles.element}>
                <View style={styles.dateContainer}>
                    <Text style={styles.month}>
                        {moment(data?.date).format('MMM')}
                    </Text>
                    <Text style={styles.date}>
                        {moment(data?.date).format('DD')}
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
                        <Text style={styles.amount}>1 pint of blood</Text>
                    </View>
                </View>

            </View>
            <View style={{ paddingTop: 25, }}>
                <Icon name="ellipsis-horizontal-circle-outline" type="ionicon" color="red" size={30} />

            </View>
        </TouchableOpacity>
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
        alignItems: 'center',
        paddingRight: 10
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
