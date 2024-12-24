import {View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'


export default function Details() {
    return (
        <View>Details</View>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 18,
        backgroundColor: '#FFFFFF',
    },
    Image: {
        width: 300,
        height: 450,
        resizeMode: 'contain',
    },
    rowContainer: {
        flexDirection: 'row',
    },
    name: {
        marginBottom: 4,
        fontSize: 20,
        fontWeight: '500',
    },
    priceContainer: {
        paddingVertical: 12,
        paddingHorizontal: 12,
        marginBottom: 12,
        borderRadius: 6,
        backgroundColor: '#deffeb',
    },
    rating: {
        marginRight: 4,
        borderRadius: 4,
        paddingHorizontal: 8,
        justifyContent: 'center',
        backgroundColor: '#008c00',
    },
})