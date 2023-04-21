// import React  from 'react'  
//组件引入
import { View, Text, Image } from '@tarojs/components'
import './LiveTelecast.scss'
import Video from '../../components/video/Video'
import Footer from '../../components/footer/Footer'
import Title from '../../components/title/Title'
import Nav from '../../components/nav/Nav'
// 图片引入
import {
  LY,
  SXJ,
  SXT,
  SZ,
  CIRCLEBTN,
  CBTN,
} from '../constans'

//函数组件
export default function LiveTelecast() {
  /*点击带样式 */
  // const [showWho, setShowWho] = useState(1) //存放需要显示按钮的编号默认为1（左按钮）  
  // const showBtn = (num) => {
  //   setShowWho(num) //收到的是需要显示按钮的编号
  // }
  return (
    <View className="LiveTelecast">
      <Title />
      <Nav />
      <Video />
      <View className="circleControls">
        <Image className="circleBtn" src={CIRCLEBTN} />
        <Image className="left cBtn" src={CBTN} />
        <Image className="top cBtn" src={CBTN} />
        <Image className="right cBtn" src={CBTN} />
        <Image className="bottom cBtn" src={CBTN} />
      </View>
      <View className="bottomNav">
        <View className="item">
          <Image className="img" src={LY} />
          <Text className="text">点击通话</Text>
        </View>
        <View className="item">
          <Image className="img" src={SXT} />
          <Text className="text">我的机位</Text>
        </View>
        <View className="item">
          <Image className="img" src={SZ} />
          <Text className="text">时光轨迹</Text>
        </View>
        <View className="item">
          <Image className="img" src={SXJ} />
          <Text className="text">设备巡航</Text>
        </View>
      </View>
      <Footer />
    </View>
  )
}

