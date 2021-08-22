import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../core/constants/theme';
import { epochToDate } from '../../core/utils';
import AuthorLayout from './AuthorLayout';
import { IPost } from './Post';

const PostLayout = (props: IPost) => {
  const {image, title, content, author, author_image, created_at} = props;
  return (
    <View style={styles.postView}>
      <View style={{flex: 1, height: '100%', justifyContent: 'space-between'}}>
        <AuthorLayout {...props}/>
        <Text style={{...FONTS.h3, color: COLORS.primary}}>
          {title}
        </Text>
        <Text style={{...FONTS.body5, color: COLORS.primary_light}}>
          {epochToDate(created_at)}
        </Text>
      </View>
      <View style={styles.imageView}>
        { image
          ? <Image style={styles.imageView} source={{uri: image}}/>
          : <Text style={{...FONTS.h1, color: COLORS.white}}>{title[0]}</Text>
        }
      </View>
    </View>
  )
}

export default PostLayout

const styles = StyleSheet.create({
  postView: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: COLORS.light_gray,
    padding: SIZES.padding,
    alignItems: "center",
    justifyContent: 'space-between',
    borderRadius: SIZES.radius,
    zIndex: 1
  },
  imageView: {
    width: 120,
    height: 120,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
