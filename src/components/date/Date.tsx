// import React from 'react'
import './Date.scss'
import { View, Image } from '@tarojs/components'
//tu
import {DATE} from '../constans'

export default function Date() {
    return (
        <View className="date">
            <View className="month">
                <View className="title">11月</View>
                <View className="day">
                    <View className="today item">今</View>
                    <View className="item">4</View>
                    <View className="item">3</View>
                    <View className="today item">2</View>
                    <View className="item">1</View>
                </View>
            </View>
            <View className="dateImg">
                <View className="shadow"></View>
                <Image className="img" src={DATE} />
            </View>
        </View>
    )
}
