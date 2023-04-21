// import React from 'react'
import './Title.scss'
//components
import { View, Text, Image } from '@tarojs/components'
// tu
import {
    BACK,
    COMBINED,
    FILL,
} from '../constans'
export default function Title() {
    return (
        <View className="Title">
            <View className="back">
                <Image className="img" src={BACK} />
            </View>
            <View className="title">DS-swei_1234...</View>
            <View className="handle">
                <Image className="fill" src={FILL} />
                <Text className="line"></Text>
                <Image className="combined" src={COMBINED} />
            </View>
        </View>
    )
}
