import {View, Text, StyleSheet} from 'react-native'
import React from 'react'

//React navigation
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import {RootStackPramList} from "../App"

import ProductItem from '../components/ProductItem'
import Separator from '../components/Separator'
//data
import { PRODUCTS_LIST } from '../data/constants'

type HomeProps = NativeStackScreenProps<RootStackPramList, "Home" >

export default function Home({navigation}: HomeProps) {
    return (
        <View>Home</View>
    )
}

const styles = StyleSheet.create({});