import {Text, View, Image, StyleSheet} from "react-native"
import React, {useEffect} from 'react'
import {Subheading, Caption, useTheme} from "react-native-paper"
import { Theme } from "react-native-paper/lib/typescript/types"

export const BookItem: React.FC<BookItemPropType> = (props:BookItemPropType) => {

  const theme = useTheme()

    useEffect(()=>{
        //do something
        console.log(props.title)
      }, [props.title])
      
    return <View style={styles.container}>
        <Image  style={styles.thumbnail} source={{
          uri: props.thumbnailUrl
        }}/>
        <View> 
          <Subheading style={{color: theme.colors.primary}}> {props.title} </Subheading>
          <Caption> {props.authors.join(',')}</Caption>
        </View>
      </View>
}

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

interface BookItemPropType {
  authors: string[];
  thumbnailUrl: string;
  title: string;
  shortDescription: string; 
  theme?: Theme;
}