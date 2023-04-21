// import React from 'react'
import './Warn.scss'

//组件引入
import { View, Text, Image } from '@tarojs/components'
import Date from '../../components/date/Date'
import Audio from '../../components/audio/Audio'
import Footer from '../../components/footer/Footer'
import Title from '../../components/title/Title'
import Nav from '../../components/nav/Nav'
//图片引入
import {
    JT,
    XZ,
    SC,
    FX,
    LB,
    TEST,
    SX
} from '../constans'
export default function Warn() {
    return (
        <View className='Warn'>
            <Title />
            <Nav />
            <View className="warn">
                <Audio />
                <View className="vidioHandle">
                    <View className="item"></View>
                    <View className="item"></View>
                    <View className="item">
                        <Image className="img" src={SC} />
                        <Text className="text">收藏</Text>
                    </View>
                    <View className="item">
                        <Image className="img" src={FX} />
                        <Text className="text">转发</Text>
                    </View>
                    <View className="item">
                        <Image className="img" src={XZ} />
                        <Text className="text">下载</Text>
                    </View>
                    <View className="item">
                        <Image className="img" src={JT} />
                        <Text className="text">截图</Text>
                    </View>
                    <View className="item">
                        <Image className="img" src={LB} />
                        <Text className="text">列表</Text>
                    </View>
                </View >
                <View className="videoContainer">
                    {/* 日期组件 */}
                    <Date />
                    <View className="videoItems">
                        <View className="videoI">
                            <View className="left">
                                <View className="videoTitle">移动侦测</View>
                                <View className="videoDate">23：23：23</View>
                            </View>
                            <View className="right">
                                <View className="videoInfo">
                                    <Image className="sx" src={SX} />
                                    <View className="videoTime">
                                        <View className="time">12:12:12</View>
                                        <Text className="line"></Text>
                                        <View className="duration">12's</View>
                                    </View>
                                </View>
                                <Image className="contentImg" src={TEST} />
                            </View>
                        </View>
                        <View className="videoI">
                            <View className="left">
                                <View className="videoTitle">移动侦测</View>
                                <View className="videoDate">23：23：23</View>
                            </View>
                            <View className="right">
                                <View className="videoInfo">
                                    <Image className="sx" src={SX} />
                                    <View className="videoTime">
                                        <View className="time">12:12:12</View>
                                        <Text className="line"></Text>
                                        <View className="duration">12's</View>
                                    </View>
                                </View>
                                <Image className="contentImg" src={TEST} />
                            </View>
                        </View>
                        <View className="videoI">
                            <View className="left">
                                <View className="videoTitle">移动侦测</View>
                                <View className="videoDate">23：23：23</View>
                            </View>
                            <View className="right">
                                <View className="videoInfo">
                                    <Image className="sx" src={SX} />
                                    <View className="videoTime">
                                        <View className="time">12:12:12</View>
                                        <Text className="line"></Text>
                                        <View className="duration">12's</View>
                                    </View>
                                </View>
                                <Image className="contentImg" src={TEST} />
                            </View>
                        </View>
                        <View className="videoI">
                            <View className="left">
                                <View className="videoTitle">移动侦测</View>
                                <View className="videoDate">23：23：23</View>
                            </View>
                            <View className="right">
                                <View className="videoInfo">
                                    <Image className="sx" src={SX} />
                                    <View className="videoTime">
                                        <View className="time">12:12:12</View>
                                        <Text className="line"></Text>
                                        <View className="duration">12's</View>
                                    </View>
                                </View>
                                <Image className="contentImg" src={TEST} />
                            </View>
                        </View>
                    </View>
                </View>
                <Footer />
            </View>
        </View>

    )
}
