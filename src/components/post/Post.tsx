import {FontAwesome5} from "@expo/vector-icons";
import React, { useContext, useRef } from "react";
import {Animated, StyleSheet, TouchableOpacity} from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { Context } from "../../context/BlogContext";
import { BlogContextType } from "../../context/types/blogContextTypes";
import {COLORS, SIZES} from "../../core/constants/theme";
import PostLayout from "./PostLayout";

export interface IPost {
  id: string;
  image?: string;
  title: string;
  content: Array<{type: string, content: string, caption?: string}>;
  author: string;
  author_image?: string;
  created_at: number;
}

const Post = (props: IPost) => {
  const swipeableRef = useRef<Swipeable>(null)
  const { deleteBlogPost } = useContext(Context) as BlogContextType

  const rightSwipe = (progress: Animated.AnimatedInterpolation, dragX: Animated.AnimatedInterpolation) => {
    const translateX = dragX.interpolate({
      inputRange: [-80, 0],
      outputRange: [0, 80],
      extrapolate: 'clamp'
    })
    return (
      <Animated.View
        style={{...styles.button, transform: [{translateX}]}}
      >
        <FontAwesome5 name="trash" size={SIZES.body2} color={COLORS.white} />
      </Animated.View>
    )
  }

  return (
    <Swipeable
      renderRightActions={rightSwipe}
      rightThreshold={80}
      overshootRight={false}
      ref={swipeableRef}
      onSwipeableRightOpen={() => {
        if(swipeableRef && swipeableRef.current) swipeableRef.current.close()
        props.id && deleteBlogPost(props.id)
      }}
    >
      <TouchableOpacity>
        <PostLayout {...props}/>
      </TouchableOpacity>
    </Swipeable>
  );
};

export default Post;

const styles = StyleSheet.create({
  button: {
    width: 70,
    height: '100%',
    marginLeft: SIZES.padding,
    backgroundColor: COLORS.red,
    borderRadius: SIZES.radius,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
