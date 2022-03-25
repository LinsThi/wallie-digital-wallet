import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useCallback, useContext } from 'react';
import { ThemeContext } from 'styled-components/native';

import more from '~/assets/icons/more.png';
import scan from '~/assets/icons/scan.png';
import user from '~/assets/icons/user.png';
import { Home } from '~/screens/Home';
import { Scan } from '~/screens/Scan';

import { Container, IconBar } from './styles';

const Tabs = createBottomTabNavigator();

export default function RoutesTabs() {
  const { Colors } = useContext(ThemeContext);

  const IconBarTab = useCallback((focused: boolean, icon: any) => {
    return (
      <Container isSelected={focused}>
        <IconBar
          source={icon}
          resizeMode="contain"
          style={
            focused
              ? {
                  tintColor: Colors.WHITE,
                }
              : { tintColor: Colors.SECONDARY }
          }
        />
      </Container>
    );
  }, []);

  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          borderTopColor: 'transparent',
          elevation: 0,
          paddingTop: 20,
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarActiveTintColor: Colors.EMERALD,
          tabBarIcon: ({ focused }) => IconBarTab(focused, more),
        }}
      />
      <Tabs.Screen
        name="Scan"
        component={Scan}
        options={{
          tabBarActiveTintColor: Colors.EMERALD,
          tabBarIcon: ({ focused }) => IconBarTab(focused, scan),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarActiveTintColor: Colors.EMERALD,
          tabBarIcon: ({ focused }) => IconBarTab(focused, user),
        }}
      />
    </Tabs.Navigator>
  );
}
