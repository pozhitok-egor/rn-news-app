import React, { useContext } from 'react'
import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Container from '../components/Container'
import Post from '../components/post/Post'
import { Context } from '../context/BlogContext'
import { BlogContextType } from '../context/types/blogContextTypes'
import { COLORS, FONTS } from '../core/constants/theme'

const HomeScreen = () => {
  const { state } = useContext(Context) as BlogContextType

  return (
    <SafeAreaView>
      <Container style={{height: '100%'}}>
        <Text style={{...FONTS.largeTitle, textAlign: 'center', color: COLORS.primary}}>News Feed</Text>
        <FlatList
          style={{flex: 1}}
          keyExtractor={ post => post.id }
          data={state}
          renderItem={({ item }) => <Post {...item}/>}
          ItemSeparatorComponent={() => <View style={{height: 10}}/>}
        />
      </Container>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
