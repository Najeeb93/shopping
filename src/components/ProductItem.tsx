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
                <View style={[styles.rowContainer, styles.ratingContainer]}>
                    <View style={styles.rating}>
                        <Text style={styles.ratingText}>{product.rating}★</Text>
                    </View>
                    <Text style={styles.ratingCount}>
                        ({product.ratingCount.toLocaleString()})
                    </Text>
                </View>
                <View style={[styles.rowContainer, styles.priceContainer]}></View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({});