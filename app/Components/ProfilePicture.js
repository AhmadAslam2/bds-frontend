import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { me } from '../apis/auth'

import colors from '../config/colors'

export default function ProfilePicture() {
    const [userData, setUserData] = useState({})
    useEffect(() => {
        const fetchCurrentUser = async () => {
            try {
                const res = await me()
                setUserData(res.data.user)
            } catch (error) {
                console.log("error", error)
            }
        }
        fetchCurrentUser()
    }, [])
    return (
        <View style={styles.pic}>
            <Text style={styles.profileName}>
                {userData.firstName} {userData.lastName}
            </Text>
            <Text style={styles.profileName}>
                Contact: {userData.contactNumber}
            </Text>
            <Text style={styles.profileName}>
                Blood Group: {userData.bloodGroup}
            </Text>
            <Text style={styles.profileName}>
                Email: {userData.email}
            </Text>
            <TouchableOpacity style={styles.editButton}>
                <Text>Edit</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    pic: {
        height: 255,
        width: '94%',
        backgroundColor: "black",
        borderRadius: 15,
        justifyContent: 'flex-end',
        padding: 20,
        marginTop: 20
    },
    profileName: {
        fontSize: 24,
        color: colors.white
    },
    editButton: {
        height: 30,
        width: 70,
        backgroundColor: "#DADADA",
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 17
    },
})
