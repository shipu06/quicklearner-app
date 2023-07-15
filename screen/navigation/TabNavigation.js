import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/themed';
import Courses from '../courses/Course';
import Home from '../home/Home';
import { Image, StyleSheet } from 'react-native';
import GlobalStyle from '../../constants/GlobalStyle';

const Tab = createBottomTabNavigator();


export default function TabNavigation() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: GlobalStyle.primaryColor,
            tabBarStyle: {
                backgroundColor: '#0000ff',
                height: 40,
            },
        }}

        >
            <Tab.Screen name="Home" options={{
                headerShown: false, tabBarLabel: 'Home',
                tabBarIcon: () => (
                    <Image source={require('./../../assets/images/Home.png')} color='#00aced' name="Home" size={24} />
                ),
            }} component={Home} />
            <Tab.Screen name="Course" options={{
                headerShown: false, tabBarLabel: 'Course',
                tabBarIcon: () => (
                    <Image source={require('./../../assets/images/Articles.png')} color='red' name="Course" size={24} />
                ),
            }} component={Courses} />
            <Tab.Screen name="Search" options={{
                headerShown: false, tabBarLabel: 'Search',
                tabBarIcon: () => (
                    <Image source={require('./../../assets/images/Search.png')} color='#00aced' name="Serach" size={24} />
                ),
            }} component={Home} />
            <Tab.Screen name="Menu" options={{
                headerShown: false, tabBarLabel: 'Menu',
                tabBarIcon: () => (
                    <Image source={require('./../../assets/images/Menu.png')} color='#00aced' name="Menu" size={24} />
                ),
            }} component={Home} />
        </Tab.Navigator>
    )
}

const style = StyleSheet.create({
    tabContainer: {
        paddingTop: 10,
        backgroundColor: 'black',
        borderWidth: 2,
        borderColor: 'red'
    }
})