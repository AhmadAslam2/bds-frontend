import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

export default function LocationMap() {
    return (
        <View style={styles.Map}>
            <MapView
                style={{ flex: 1 }}
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                initialRegion={{
                    latitude: 31.5204,
                    longitude: 74.3587,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
            >
                <Marker coordinate={{
                    latitude: 31.5204,
                    longitude: 74.3587,
                }}>

                </Marker>
            </MapView>

        </View>
    )
}
const styles = StyleSheet.create({
    Map: {
        height: "60%",
        width: "100%",
        borderRadius: 15,
        padding: 15,
        borderRadius: 15
    }
})
