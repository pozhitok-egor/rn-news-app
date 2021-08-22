import React from 'react'
import { ReactNode } from 'react'
import { View, ViewStyle } from 'react-native'
import { SIZES } from '../core/constants/theme'

const Container = ({children, style}: {children: ReactNode, style?: ViewStyle}) => {
  return (
    <View style={{ ...style, padding: SIZES.padding}}>
      {children}
    </View>
  )
}

export default Container
