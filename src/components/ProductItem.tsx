import {View, Text, StyleSheet} from 'react-native'
import React, { PropsWithChildren } from 'react'


type ProductProps = PropsWithChildren<{
    product: Product
}>

export default function ProductItem({product}: ProductProps) {
    return (
        <View>
            <Text>Product Item</Text>
        </View>
    )
};

const style = StyleSheet.create({});