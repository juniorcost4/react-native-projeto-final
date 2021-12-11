import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home';

const AppStack = createStackNavigator();

const AppRoutes = () => {
    return (
        <AppStack.Navigator>
            <AppStack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        </AppStack.Navigator>
    )
}

export default AppRoutes;