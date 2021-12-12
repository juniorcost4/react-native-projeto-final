import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../pages/Home';
import Login from '../pages/Login';
import Detalhes from '../pages/Detalhes';
import Cart from '../pages/Cart';
import AuthRoutes from './authRoutes';
import AppRoutes from './appRoutes';

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
                activeTintColor: '#222',
                tabStyle: {
                    paddingBottom: 5,
                    paddingTop: 5,
                    backgroundColor: '#222',
                    borderTopColor: 'transparent',
                }

            }}
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
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" >
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes