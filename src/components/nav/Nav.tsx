// import React from 'react'
import { View, Navigator, Image} from '@tarojs/components'
import Taro from '@tarojs/taro'
import './Nav.scss'
import {SYSTEM} from '../constans'
export default function Nav() {
  function router(path:string):void{
    Taro.navigateTo({
      url: `/pages${path}`,
    })
  }
  return (
    <View className="nav">
      <View className="item" onClick={()=>router("/warn/Warn")}><Navigator className="navitem">报警</Navigator></View>
      <View className="item active" onClick={()=>router("/livetelecast/LiveTelecast")}><Navigator className="navitem">直播</Navigator></View>
      <View className="item" onClick={()=>router("/playback/PlayBack")}><Navigator className="navitem">回看</Navigator></View>
      <View className="item system">
        <Image className="img" src={SYSTEM}  />
        设置
      </View>
    </View>
  )
}
