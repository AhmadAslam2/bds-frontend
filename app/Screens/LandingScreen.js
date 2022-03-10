
import React, { useEffect, useState } from 'react'
import { Icon, SearchBar } from 'react-native-elements';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import * as SecureStore from 'expo-secure-store';

import LocationCard from '../Components/LocationCard'
import MenuBar from '../Components/MenuBar'
import RequestCard from '../Components/RequestCard'

export default function LandingScreen({ navigation }) {
    const [loading, setLoading] = useState(false)
    useEffect(() => {

    })
    const [search, setSearch] = useState("");

    const updateSearch = (search) => {
        setSearch(search);
    };
    const signOut = () => {
        SecureStore.deleteItemAsync('token').then(
            navigation.navigate('SigninScreen')
        );
    }
    return (

        <SafeAreaView style={styles.container}>
            {loading ? <Text>Loading..</Text> : (
                <>
                    <View style={styles.topBar}>
                        <SearchBar
                            placeholder="Search..."
                            onChangeText={updateSearch}
                            value={search}
                            containerStyle={{
                                backgroundColor: "white", width: "50%", height: 50, borderBottomColor: "transparent", borderTopColor: "transparent"
                            }}
                            inputContainerStyle={{ backgroundColor: "white", width: "100%", height: 30, }}
                            lightTheme
                        />
                        <TouchableOpacity style={{ alignSelf: "center" }} onPress={signOut}  >
                            <Icon name="log-out-outline" type="ionicon" color={"#7D859D"} />
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
