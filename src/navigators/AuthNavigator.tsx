import React from "react"
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from "../screens/Login";
 

const Stack = createStackNavigator();

export const AuthNavigator = () => {
    return <Stack.Navigator initialRouteName="Login" screenOptions={(params) => ({
        headerShown: false
    })}>
        <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
}