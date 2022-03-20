import React from "react"

import { createStackNavigator } from '@react-navigation/stack';
import { NewBook } from '../screens/NewBook';
import { BookDetail } from '../screens/BookDetail';

import { HomeNavigator } from "./HomeNavigator";
import { Appbar } from 'react-native-paper';

const Stack = createStackNavigator();


export const AppNavigator = () => {
    return <Stack.Navigator screenOptions = {(params) => ({
        header: CustomAppBar
    })}>
        <Stack.Screen name="Home" component={HomeNavigator} />
        <Stack.Screen name="BookDetail" component={BookDetail} />
        <Stack.Screen name="NewBook" component={NewBook}/>
    </Stack.Navigator>
}



const CustomAppBar = (props: any) => {
    return (
        <Appbar.Header>
            {props.back ? <Appbar.BackAction onPress={props.navigation.goBack} /> : null}
            <Appbar.Content title="BookApp" />
        </Appbar.Header>
    );
}