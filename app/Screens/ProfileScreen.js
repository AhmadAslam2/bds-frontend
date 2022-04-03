import React, { useEffect, useState } from 'react'
import { StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements';
import * as SecureStore from 'expo-secure-store';


import ProfileHistory from '../Components/ProfileHistory'
import ProfilePicture from '../Components/ProfilePicture'
import { useNavigation } from '@react-navigation/native';


export default function ProfileScreen() {
    const [checkingIsLoggedIn, setCheckingIsLoggedIn] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState()
    const navigation = useNavigation()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getToken = async () => {
            setCheckingIsLoggedIn(true)
            const isLoggedIn = await SecureStore.getItemAsync("token")
            setIsLoggedIn(isLoggedIn)
            setCheckingIsLoggedIn(false)
        }
        getToken()
    }, [])


    const signOut = () => {
        SecureStore.deleteItemAsync('token').then(
            navigation?.navigate('SigninScreen')
        );
    }

    if (checkingIsLoggedIn) {
        return null
    }

    if (!isLoggedIn) {
        navigation?.navigate("SigninScreen")
        return null
    }



    return (
        <SafeAreaView style={styles.profileContainer}>
            <TouchableOpacity style={{ flexDirection: "row", alignSelf: "flex-end", paddingRight: 20 }} onPress={signOut}  >
                <Icon name="log-out-outline" type="ionicon" color={"#7D859D"} />
            </TouchableOpacity>
            <ProfilePicture />
            <ProfileHistory navigation={navigation} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    profileContainer: {
        alignItems: 'center',
        justifyContent: "space-between",
        height: '100%',
        backgroundColor: "white",
    },
    topBar: {
        fontWeight: '600',
        fontSize: 18,
    }
})
