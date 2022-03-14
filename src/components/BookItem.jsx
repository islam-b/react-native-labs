import {Text} from "react-native"
import React, {useEffect} from 'react'

export const BookItem = (props) => {

    useEffect(()=>{
        //do something
        console.log(props.name)
      }, [props.name])
      
    return <Text> {props.name} </Text>
}