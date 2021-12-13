import React from 'react';
import { Dimensions } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../pages/Home';
import Login from '../pages/Login';
import Detalhes from '../pages/Detalhes';
import Cart from '../pages/Cart';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function stackHome() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Detalhes" component={Detalhes} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

function Tabs() {
    return (
        <Tab.Navigator
        screenOptions={{
            tabBarStyle: { 
                backgroundColor: '#F4F4F4',
                height: Dimensions.get('window').height * 0.085, 
            },
            tabBarActiveTintColor: '#27AE60',
            tabBarInactiveTintColor: '#808080',
            labelStyle: {
                marginBottom: 6,
                padding: 0,
                fontStyle: 'normal',
                fontSize: 10,
                lineHeight: 12
            },
          }}
            initialRouteName="Home"
        >
            <Tab.Screen name="Inicio"
                component={stackHome}
                options={{
                    headerShown: false,
                    title: "Home",
                    tabBarIcon: ({ size, color }) => (
                        <Entypo name="home" size={size} color={color} />
                    )
                }}                
            />
            <Tab.Screen name="Cart"
                component={Cart}
                options={{
                    headerShown: false,
                    title: 'Carrinho',
                    tabBarIcon: ({ size, color }) => (
                        <Entypo name="shopping-cart" size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}
const Routes = () => {
    return (
            <Stack.Navigator initialRouteName="Tabs" >
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
            </Stack.Navigator>
    )
}

export default Routes