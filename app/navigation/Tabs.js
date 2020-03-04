import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import images from '../assets/images';

import Home from '../screens/Home';
import AddNewPost from '../screens/AddNewPost';
import MyPosts from '../screens/MyPosts';
import Profile from '../screens/Profile';
import Conversation from '../screens/Conversation';

const Tab = createBottomTabNavigator();

function MyTabs() {
    const {home, myPosts, addNewPost, profile, conversation} = images.tab;
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                style: {height: 50},
                activeBackgroundColor: 'rgba(92, 102, 127, 0.05)',
                showLabel: false,
                keyboardHidesTabBar: true,
            }}
            >
            <Tab.Screen 
            name="Home" 
            component={Home}
            options={{
                tabBarIcon: () => <Image source={home} style={{width: 30, height: 30}} />,
                // unmountOnBlur: true //if we want to unmount th screen
            }}
             />
            <Tab.Screen 
            name="MyPosts" 
            component={MyPosts}
            options={{
                tabBarIcon: () => <Image source={myPosts} style={{width: 30, height: 30}} />
                // unmountOnBlur: true //if we want to unmount th screen
            }}
            />
            <Tab.Screen 
            name="AddNewPost" 
            component={AddNewPost}
            options={{
                tabBarIcon: () => <Image source={addNewPost} style={{width: 40, height: 40}} />
                // unmountOnBlur: true //if we want to unmount th screen
            }}
            />
            <Tab.Screen 
            name="Profile" 
            component={Profile}
            options={{
                tabBarIcon: () => <Image source={profile} style={{width: 30, height: 30}} />
                // unmountOnBlur: true //if we want to unmount th screen
            }}
             />
            <Tab.Screen 
            name="Conversation" 
            component={Conversation}
            options={{
                tabBarIcon: () => <Image source={conversation} style={{width: 30, height: 30}} />
                // unmountOnBlur: true //if we want to unmount th screen
            }}
             />
        </Tab.Navigator>
    );
}

export default MyTabs;