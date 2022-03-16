import React from 'react'
import {View} from "react-native"
import {Headline, Paragraph} from "react-native-paper"

export const BookDetail = (props) => {
    let book = props.route.params.book
    return <View>
          <Headline>{book.title}</Headline>
          <Paragraph>{book.longDescription}</Paragraph>
    </View>
}