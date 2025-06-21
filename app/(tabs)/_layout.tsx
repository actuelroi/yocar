import { IconSymbol } from '@/components/ui/IconSymbol';
import { AntDesign, Entypo, Ionicons, Octicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';


export default function TabLayout() {
  

  return (
    <Tabs
      screenOptions={{
        
        headerShown: false,
       
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons size={24} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="traject"
        options={{
          title: 'Trajet',
          tabBarIcon: ({ color }) => <Entypo size={24} name="compass" color={color} />,
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          title: 'Notification',
          tabBarIcon: ({ color }) => <Octicons name="bell" size={24} color={color} />,
        }}
      />
      
      <Tabs.Screen
        name="profil"
        options={{
          title: 'Profil',
          tabBarIcon: ({ color }) => <AntDesign size={24} name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}
