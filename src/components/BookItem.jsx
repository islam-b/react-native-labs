import {Text, View, Image, StyleSheet} from "react-native"
import React, {useEffect} from 'react'
import {Subheading, Caption} from "react-native-paper"
import { withTheme } from "react-native-paper"

export const BookItem = withTheme((props) => {

  const theme = props.theme

    useEffect(()=>{
        //do something
        console.log(props.title)
      }, [props.name])
      
    return <View style={styles.container}>
        <Image  style={styles.thumbnail} source={{
          uri: props.thumbnailUrl
        }}/>
        <View> 
          <Subheading style={{color: theme.colors.primary}}> {props.title} </Subheading>
          <Caption> {props.authors.join(',')}</Caption>
        </View>
      </View>
})

const styles = StyleSheet.create({
  thumbnail: {
    height: 100,
    aspectRatio: 3/4
  },
  container: {
    padding: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
});