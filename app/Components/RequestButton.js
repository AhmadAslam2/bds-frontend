import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import { Icon, Overlay, Input } from 'react-native-elements';
import { Formik } from 'formik';

import colors from '../config/colors'

export default function RequestButton({ setLoading }) {
    const [visible, setVisible] = useState(false);
    const toggleOverlay = () => {
        setVisible(!visible);
    };


    return (
        <TouchableOpacity style={styles.requestBoton}>
            <TouchableOpacity style={{ width: '100%', height: '100%' }} onPress={toggleOverlay} >
                <View style={styles.svg}>
                    <Icon name="blood-drop" type="fontisto" color="white" />
                </View>
            </TouchableOpacity>
            <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                <Formik
                    initialValues={{
                        location: '',
                        description: "",
                        amount: "",
                        type: "",
                        diagnosis: ""
                    }}
                    onSubmit={values => {
                        setLoading && setLoading(true)
                        global.requestList = [{
                            donorName: "Ahmad Aslam",
                            location: values.location,
                            bloodType: values.type,
                            amountFilled: "0",
                            amountNeeded: values.amount,
                            description: values.description,
                            diagnosis: values.diagnosis
                        }, ...global.requestList]
                        setLoading && setLoading(false)
                        toggleOverlay()
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <View style={styles.Overlay}>
                            <Input placeholder="Location"
                                onChangeText={handleChange('location')}
                                onBlur={handleBlur('location')}
                                value={values.location}
                                autoCorrect={false}

                            />

                            <Text style={{ fontSize: 18, fontWeight: '600' }}>Choose Amount and Type</Text>
                            <View style={styles.amountAndTypeContainer}>
                                <View style={{ width: 85 }}>
                                    <Input placeholder="Amount"
                                        onChangeText={handleChange('amount')}
                                        onBlur={handleBlur('amount')}
                                        value={values.amount} style={styles.amount}
                                        autoCorrect={false}
                                    />
                                </View>
                                <View style={{ width: 85 }}>
                                    <Input
                                        onChangeText={handleChange('type')}
                                        onBlur={handleBlur('type')}
                                        value={values.type}
                                        placeholder="Type" style={styles.amount}
                                        autoCorrect={false}

                                    />
                                </View>
                            </View>
                            <Input
                                onChangeText={handleChange('diagnosis')}
                                onBlur={handleBlur('diagnosis')}
                                value={values.diagnosis} placeholder="Diagnosis(required)"
                                autoCorrect={false}
                            />
                            <Input onChangeText={handleChange('description')}
                                onBlur={handleBlur('description')}
                                value={values.description} placeholder="Description(optional)"
                                autoCorrect={false}
                            />
                            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                                <Text style={styles.buttonText}>
                                    Submit
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </Formik>
            </Overlay>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    amount: {
        height: 25,
        width: 50,
    },
    amountAndTypeContainer: {
        flexDirection: "row",

    },
    button: {
        width: "55%",
        backgroundColor: colors.secondary,
        alignItems: "center",
        padding: 15,
        borderRadius: 15,
    },
    buttonText: {
        fontWeight: "bold",
        fontSize: 18,
        color: colors.white
    },
    Overlay: {
        width: 300,
        height: 400,
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    requestBoton: {
        height: 65,
        width: 65,
        borderRadius: 100,
        position: "absolute",
        backgroundColor: colors.secondary,
        left: '42%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 14,
    },
    svg: {
        top: 19,
    },
})
