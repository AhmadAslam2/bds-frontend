import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native'
import { Icon, Input } from 'react-native-elements';
import { Formik } from 'formik'
import colors from '../config/colors'

export default function ConfirmationCard({ navigation, requestData }) {
    const maxAmount = requestData.amountNeeded - requestData.amountFilled
    return (
        <View style={styles.confirm}>
            <View>
                <Text style={styles.text}>
                    Choose date and amount
                </Text>
            </View>
            <Formik
                initialValues={{
                    amount: "",
                    date: new Date().getDate().toString()
                }}
                onSubmit={(values) => {
                    global.donationHistory.push({
                        date: values.date,
                        amount: values.amount,
                        location: requestData?.location
                    });
                    navigation.navigate('ProfileScreen')
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <>
                        <View style={{ flexDirection: 'row', width: "100%", justifyContent: "center" }}>
                            <View style={{ alignSelf: 'center' }}>
                                <Input
                                    placeholder="Date"
                                    leftIcon={{ type: 'ionicon', name: 'calendar-outline', color: 'white', size: 15 }}
                                    placeholderTextColor="white"
                                    containerStyle={styles.input}
                                    inputContainerStyle={{ borderBottomWidth: 0 }}
                                    inputStyle={{ color: 'white' }}
                                    onChangeText={handleChange('date')}
                                    onBlur={handleBlur('date')}
                                    value={values.date}
                                />
                            </View>
                            {/* <View>
                                <Input
                                    placeholder="Amount"
                                    placeholderTextColor="white"
                                    containerStyle={styles.input}
                                    inputStyle={{ color: 'white' }}
                                    keyboardType='numeric'
                                    onChangeText={handleChange('amount')}
                                    onBlur={handleBlur('amount')}
                                    value={values.amount}
                                />
                            </View> */}
                        </View>
                        <View style={{ borderColor: "white", borderWidth: 1, width: '100%' }} />
                        <View style={styles.locationContainer}>
                            <Text style={styles.location}>{requestData.location || 'N/A'}</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 5 }}>
                                <Text style={styles.yourLocation}>
                                    Lahore
                                </Text>
                                <Icon name="location" type="ionicon" color={colors.primary} size={20} />
                            </View>
                        </View>
                        <TouchableOpacity style={styles.button}
                            onPress={handleSubmit}>
                            <Text style={styles.buttonText}>
                                Confirm
                            </Text>
                        </TouchableOpacity>
                    </>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        width: "92%",
        backgroundColor: colors.secondary,
        alignItems: "center",
        padding: 10,
        borderRadius: 15,
    },
    buttonText: {
        fontWeight: "bold",
        fontSize: 18,
        color: colors.white
    },
    confirm: {
        height: "38%",
        width: "92%",
        backgroundColor: "#A2B5EB",
        borderRadius: 15,
        alignItems: 'center',
        padding: 20,
        justifyContent: 'space-evenly',
    },
    input: {
        height: 40,
        borderRadius: 15,
        backgroundColor: '#4864C5',
        width: 100,
        paddingHorizontal: 15,
        paddingVertical: 0,
        margin: 0
    },
    location: {
        fontSize: 18,
        fontWeight: '600',
        color: colors.white
    },
    locationContainer: {
        flexDirection: 'column',
        width: '100%',
    },
    text: {
        fontSize: 20,
        fontWeight: '600',
        color: colors.white
    },
    yourLocation: {
        fontSize: 18,
        fontWeight: '600',
        color: colors.white,
        justifyContent: 'center'
    }
})
