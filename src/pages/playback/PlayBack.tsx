// import React from 'react'
import  './PlayBack.scss'

//组件
import { View, Text, Image } from '@tarojs/components'
import Audio from '../../components/audio/Audio'
import Date from '../../components/date/Date'
import Footer from '../../components/footer/Footer'
import Title from '../../components/title/Title'
import Nav from '../../components/nav/Nav'
//tu
import {
    TU,
    PJT,
    PXZ,
    PFX,
    PLB,
} from '../constans'

export default function PlayBack() {
    return (
        <View className='background'>
            <Title />
            <Nav />
            <View className="playback">
                <Audio />
                <View className="vidioHandle">
                    <View className="item"></View>
                    <View className="item"></View>
                    <View className="item">
                    </View>
                    <View className="item">
                        <Image className="img" src={PFX} />
                        <Text className="text">转发</Text>
                    </View>
                    <View className="item">
                        <Image className="img" src={PXZ} />
                        <Text className="text">下载</Text>
                    </View>
                    <View className="item">
                        <Image className="img" src={PJT} />
                        <Text className="text">截图</Text>
                    </View>
                    <View className="item">
                        <Image className="img" src={PLB} />
                        <Text className="text">列表</Text>
                    </View>
                </View >
                <View className="videoContainer">
                    {/* 日期组件 */}
                    <Date />
                    <View className="videoItems">
                        <View className="item">
                            <View className="videoTime">12:00</View>
                            <View className="videos">
                                <View className="vdo">
                                    <Image className="iconimg" src={TU} />
                                    <View className="times">
                                        <View className="time">12:12:12</View>
                                        <Text className="line"></Text>
                                        <View className="duration">12's</View>
                                    </View>
                                </View>
                                <View className="vdo">
                                    <Image className="iconimg" src={TU} />
                                    <View className="times">
                                        <View className="time">12:12:12</View>
                                        <Text className="line"></Text>
                                        <View className="duration">12's</View>
                                    </View>
                                </View>
                                <View className="vdo">
                                    <Image className="iconimg" src={TU} />
                                    <View className="times">
                                        <View className="time">12:12:12</View>
                                        <Text className="line"></Text>
                                        <View className="duration">12's</View>
                                    </View>
                                </View>
                                <View className="vdo">
                                    <Image className="iconimg" src={TU} />
                                    <View className="times">
                                        <View className="time">12:12:12</View>
                                        <Text className="line"></Text>
                                        <View className="duration">12's</View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View className="item">
                            <View className="videoTime">12:00</View>
                            <View className="videos">
                                <View className="vdo">
                                    <Image className="iconimg" src={TU} />
                                    <View className="times">
                                        <View className="time">12:12:12</View>
                                        <Text className="line"></Text>
                                        <View className="duration">12's</View>
                                    </View>
                                </View>
                                <View className="vdo">
                                    <Image className="iconimg" src={TU} />
                                    <View className="times">
                                        <View className="time">12:12:12</View>
                                        <Text className="line"></Text>
                                        <View className="duration">12's</View>
                                    </View>
                                </View>
                                <View className="vdo">
                                    <Image className="iconimg" src={TU} />
                                    <View className="times">
                                        <View className="time">12:12:12</View>
                                        <Text className="line"></Text>
                                        <View className="duration">12's</View>
                                    </View>
                                </View>
                                <View className="vdo">
                                    <Image className="iconimg" src={TU} />
                                    <View className="times">
                                        <View className="time">12:12:12</View>
                                        <Text className="line"></Text>
                                        <View className="duration">12's</View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View className="item">
                            <View className="videoTime">12:00</View>
                            <View className="videos">
                                <View className="vdo">
                                    <Image className="iconimg" src={TU} />
                                    <View className="times">
                                        <View className="time">12:12:12</View>
                                        <Text className="line"></Text>
                                        <View className="duration">12's</View>
                                    </View>
                                </View>
                                <View className="vdo">
                                    <Image className="iconimg" src={TU} />
                                    <View className="times">
                                        <View className="time">12:12:12</View>
                                        <Text className="line"></Text>
                                        <View className="duration">12's</View>
                                    </View>
                                </View>
                                <View className="vdo">
                                    <Image className="iconimg" src={TU} />
                                    <View className="times">
                                        <View className="time">12:12:12</View>
                                        <Text className="line"></Text>
                                        <View className="duration">12's</View>
                                    </View>
                                </View>
                                <View className="vdo">
                                    <Image className="iconimg" src={TU} />
                                    <View className="times">
                                        <View className="time">12:12:12</View>
                                        <Text className="line"></Text>
                                        <View className="duration">12's</View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <Footer />
            </View>
        </View>

    )
}
