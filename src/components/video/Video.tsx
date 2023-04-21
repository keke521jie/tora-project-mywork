// import React from 'react'
import './Video.scss'
import { View, Text, Image } from '@tarojs/components'
// tu
// import auto from '../../assets/images/video/auto@2x.png'
// import hd from '../../assets/images/video/hd@2x.png'
// import big from '../../assets/images/video/big@2x.png'
// import sxj from '../../assets/images/video/sxj@2x.png'
// import audio from '../../assets/images/video/audio@2x.png'
// import xj from '../../assets/images/video/xj@2x.png'
// import sd from '../../assets/images/video/sd@2x.png'
import {
    AUTO,
    HD,
    VBIG,
    SXJ,
    VAUDIO,
    XJ,
    SD
} from '../constans'
export default function Video() {
    return (
        <View className="videoContent">
            <View className="videoContainer">
                {/* <video className={style.video} src="" controls></video> */}
            </View>
            <View className="controls">
                <View className="item">
                    <Image className="img" src={AUTO} />
                    <Text className="text">标清</Text>
                </View>
                <View className="item">
                    <Image className="img" src={SD} />
                    <Text className="text">标清</Text>
                </View>
                <View className="item">
                    <Image className="img" src={HD} />
                    <Text className="text">高清</Text>
                </View>
                <View className="item">
                    <Image className="img" src={VAUDIO} />
                    <Text className="text">声音</Text>
                </View>
                <View className="item">
                    <Image className="img" src={SXJ} />
                    <Text className="text">录像</Text>
                </View>
                <View className="item">
                    <Image className="img" src={XJ} />
                    <Text className="text">截图</Text>
                </View>
                <View className="item">
                    <Image className="img" src={VBIG} />
                    <Text className="text">全屏</Text>
                </View>
            </View>
        </View>
    )
}
