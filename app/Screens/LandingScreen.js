
import React, { useEffect, useState } from 'react'
import { Icon } from 'react-native-elements';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import * as SecureStore from 'expo-secure-store';

import LocationCard from '../Components/LocationCard'
import RequestCard from '../Components/RequestCard'
import { donationRequests } from '../apis/auth';
import { useNavigation, useIsFocused } from '@react-navigation/native';

export default function LandingScreen() {
    const navigation = useNavigation()
    const isFocused = useIsFocused();
    const [filterType, setFilterType] = useState("all")
    const [loading, setLoading] = useState(false)
    const [donationRequest, setDonationRequest] = useState([])
    useEffect(() => {
        if (isFocused) {
            setLoading(true)
            const fetchDonationRequest = async () => {
                try {
                    const res = await donationRequests(filterType)
                    // console.log(res)
                    setDonationRequest(res.data?.donationRequests)
                    setLoading(false)
                } catch (error) {
                    console.log("error", error)
                } finally {
                    setLoading(false)
                }
            }
            fetchDonationRequest()
        }
    }, [isFocused, filterType])
    const signOut = () => {
        SecureStore.deleteItemAsync('token').then(
            navigation?.navigate('SigninScreen')
        );
    }
    return (

        <SafeAreaView style={styles.container}>
            <>
                <View style={styles.topBar}>
                    <TouchableOpacity style={{ alignSelf: "center" }} onPress={() => navigation?.navigate('NgoListScreen')}  >
                        <Icon name="search-outline" type="ionicon" color={"#7D859D"} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignSelf: "center" }} onPress={signOut}  >
                        <Icon name="log-out-outline" type="ionicon" color={"#7D859D"} />
                    </TouchableOpacity>
                </View>
                <LocationCard setFilterType={setFilterType} />
                <ScrollView style={styles.requestContainer}>
                    {loading ? <Text>Loading..</Text> : <>
                        {donationRequest?.reverse().map((rq, index) => {
                            return (
                                <RequestCard requestData={rq} navigation={navigation} key={index} />
                            )
                        })}
                    </>}

                </ScrollView>
            </>
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
