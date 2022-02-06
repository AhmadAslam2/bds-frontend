import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ViewComponent } from 'react-native'
import MenuBar from '../Components/MenuBar'
import ProfileHistory from '../Components/ProfileHistory'
import ProfilePicture from '../Components/ProfilePicture'
import RequestButton from '../Components/RequestButton'

export default function ProfileScreen({ navigation }) {
    const [loading, setLoading] = useState(false)

    return (
        <SafeAreaView style={styles.profileContainer}>
            {/* <Text style={styles.topBar}>Profile</Text> */}
            <ProfilePicture />
            <ProfileHistory />
            <MenuBar navigation={navigation} setLoading={setLoading} />
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
