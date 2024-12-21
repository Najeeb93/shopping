import {View, Text, StyleSheet, Image} from 'react-native'
import React, { PropsWithChildren } from 'react'


type ProductProps = PropsWithChildren<{
    product: Product
}>

export default function ProductItem({product}: ProductProps) {
    return (
        <View style={styles.container}>
            <Image
            source={{uri: product.imageUrl}}
            style={styles.image} 
            />
            <View>
                <Text style={styles.name}>{product.name}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({});