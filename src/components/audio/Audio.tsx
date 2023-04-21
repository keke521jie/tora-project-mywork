// import React from 'react'
import './Audio.scss'
import { View, Text, Image } from '@tarojs/components'
//tu
import {
  AUDIO,
  BIG,
  CIRCLE,
  PA,
  QUK,
} from '../constans'
export default function Audio() {
  return (
    <View className="warnVideo">
      {/* <video className={style.video} src="" controls></video> */}
      <View className="videoControls">
        <Image className="img" src={PA} />
        <Image className="img" src={AUDIO} />
        <Text className="sTime">00:00</Text>
        <View className="progressBar">
          <Image className="btn img" src={CIRCLE} />
        </View>
        <Text className="eTime">00:48</Text>
        <Image className="quk" src={QUK} />
        <Image className="img" src={BIG} />
      </View>
    </View>
  )
}
