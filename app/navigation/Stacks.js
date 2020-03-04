/*
    This is NavigationContainer which contains two screens that I have used in this app. 
    It is based on React-Navigation version 5.x, and its logic have changed a bit from the previous versions.
*/
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//screens
import Auth from '../screens/Auth';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Forgot from '../screens/Forgot';
import MyTabs from './Tabs';
import Post from '../screens/Post';
import EditMyPost from '../screens/EditMyPost';
import Messages from '../screens/Messages';
import Filters from '../screens/Filters';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none" initialRouteName="Auth">
                <Stack.Screen
                    name="Auth"
                    component={Auth}
                    options={{
                        title: null,
                        headerStyle: {
                            height: 0
                        },
                    }}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        title: 'Login',
                        headerStyle: {
                            backgroundColor: 'rgb(92, 102, 127)',
                        },
                        headerTintColor: '#C6C7CB',
                    }}
                />
                <Stack.Screen
                    name="Register"
                    component={Register}
                    options={{
                        title: 'Register',
                        headerStyle: {
                            backgroundColor: 'rgb(92, 102, 127)',
                        },
                        headerTintColor: '#C6C7CB',
                    }}
                />
                <Stack.Screen
                    name="Forgot"
                    component={Forgot}
                    options={{
                        title: 'Forgot',
                        headerStyle: {
                            backgroundColor: 'rgb(92, 102, 127)',
                        },
                        headerTintColor: '#C6C7CB',
                    }}
                />
                <Stack.Screen
                    name="Tabs"
                    component={MyTabs}
                    options={{
                        title: 'Tabs',
                        headerStyle: {
                            backgroundColor: 'rgb(92, 102, 127)',
                        },
                        headerTintColor: '#C6C7CB',
                    }}
                />
                <Stack.Screen
                    name="Post"
                    component={Post}
                    options={{
                        title: 'Post',
                        headerStyle: {
                            backgroundColor: 'rgb(92, 102, 127)',
                        },
                        headerTintColor: '#C6C7CB',
                    }}
                />
                <Stack.Screen
                    name="EditMyPost"
                    component={EditMyPost}
                    options={{
                        title: 'EditMyPost',
                        headerStyle: {
                            backgroundColor: 'rgb(92, 102, 127)',
                        },
                        headerTintColor: '#C6C7CB',
                    }}
                />
                <Stack.Screen
                    name="Messages"
                    component={Messages}
                    options={{
                        title: 'Messages',
                        headerStyle: {
                            backgroundColor: 'rgb(92, 102, 127)',
                        },
                        headerTintColor: '#C6C7CB',
                    }}
                />
                <Stack.Screen
                    name="Filters"
                    component={Filters}
                    options={{
                        title: 'Filters',
                        headerStyle: {
                            backgroundColor: 'rgb(92, 102, 127)',
                        },
                        headerTintColor: '#C6C7CB',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackNavigator;