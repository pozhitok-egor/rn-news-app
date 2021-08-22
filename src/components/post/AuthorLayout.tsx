import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../core/constants/theme'
import { IProps } from './Post'

const AuthorLayout = ({author_image, author}: IProps) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={{...styles.imageView}}>
        { author_image
            ? <Image style={{width: '100%', height: '100%', borderRadius: 50}} source={{uri: author_image}}/>
            : <Text style={{color: COLORS.white}}>
                {author[0]}
              </Text>
        }
      </View>
      <Text style={{...FONTS.h4, color: COLORS.primary}}>
        {author}
      </Text>
    </View>
  )
}

export default AuthorLayout

const styles = StyleSheet.create({
  imageView: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.secondary,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: SIZES.padding
  }
})
