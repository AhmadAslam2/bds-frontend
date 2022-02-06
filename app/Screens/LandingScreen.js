
import React, { useEffect, useState } from 'react'
import { Icon } from 'react-native-elements';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import LocationCard from '../Components/LocationCard'
import MenuBar from '../Components/MenuBar'
import RequestCard from '../Components/RequestCard'

export default function LandingScreen({ navigation }) {
    const [loading, setLoading] = useState(false)
    useEffect(() => {

    })
    return (

        <SafeAreaView style={styles.container}>
            {loading ? <Text>Loading..</Text> : (
                <>
                    <View style={styles.topBar}>
                        <TouchableOpacity>
                            <Icon name="search-outline" type="ionicon" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name="menu-outline" type="ionicon" />
                        </TouchableOpacity>
                    </View>
                    <LocationCard />
                    <ScrollView style={styles.requestContainer}>
                        <Text style={styles.requestListText}>
                            Request List
                        </Text>
                        {requestList.map((rq, index) => {
                            return (
                                <RequestCard requestData={rq} navigation={navigation} key={index} />
                            )
                        })}
                    </ScrollView>
                </>
            )}

            <MenuBar navigation={navigation} setLoading={setLoading} />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "white"
    },
    requestContainer: {
        flexDirection: "column",
        flex: 1,
        margin: 15,
    },
    requestListText: {
        color: "#7D859D",
        fontSize: 18,
        fontWeight: "normal",
    },
    topBar: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginLeft: 15,
        marginTop: 15,
        marginRight: 15,

    }
})
