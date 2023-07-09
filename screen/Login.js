import { StatusBar } from "expo-status-bar";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Dimensions } from "react-native";
import { Input, TabView, Icon } from '@rneui/themed';
import { Tab } from '@rneui/themed';
import React from "react";
import { Button } from '@rneui/themed';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default function Login() {
    const [index, setIndex] = React.useState(0);
    const handleTabChange = () => {
        index === 0 ? setIndex(1) : setIndex(0);
    }

    return (
        <SafeAreaView style={styles.loginScreen}>
            <StatusBar style="light" />
            <View style={styles.statusBarStyling} />
            <View style={styles.logoSection}>
                <View>
                    <View style={styles.rings}>
                        <Image source={require('./../assets/images/Ellipse3.png')} style={{ marginBottom: 20 }} />
                        <Image source={require('./../assets/images/Ellipse2.png')} style={{ marginBottom: 30 }} />
                    </View>
                    <Image source={require('./../assets/images/logo.png')} />
                    <View style={styles.rings}>
                        <Image source={require('./../assets/images/Ellipse1.png')} style={{ marginTop: 30 }} />
                        <Image source={require('./../assets/images/Ellipse4.png')} style={{ marginTop: 20 }} />
                    </View>
                </View>
            </View>
            <View style={styles.formSection}>
                <>
                    <Tab
                        value={index}
                        onChange={() => handleTabChange()}
                        indicatorStyle={{
                            backgroundColor: 'black',
                            height: 2,
                            width: '50%'
                        }}
                        style={{ height: 60, borderTopLeftRadius: 30, borderTopRightRadius: 30, overflow: "hidden", backgroundColor: '#8518FF', }}
                    >
                        <Tab.Item
                            title="LOGIN"
                            titleStyle={{ fontSize: 18, color: 'white' }}
                        />
                        <Tab.Item
                            title="SIGN Up"
                            titleStyle={{ fontSize: 18, color: 'white' }}
                        />

                    </Tab>

                    <TabView value={index} onChange={handleTabChange} animationType="spring">
                        <TabView.Item style={{ width: '100%' }}>
                            <View style={styles.loginForm}>
                                <Input
                                    placeholder='BASIC INPUT'
                                />
                                <View style={styles.passwordInput}>
                                    <Input placeholder="Password" secureTextEntry={true} style={styles.password} />

                                </View>


                            </View>
                        </TabView.Item>
                        <TabView.Item style={{ width: '100%' }}>
                            <Text h1>Favorite</Text>
                        </TabView.Item>

                    </TabView>
                </>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    statusBarStyling: {
        width: width,
        height: 30,
    },
    loginScreen: {
        flex: 1,
        flexDirection: 'column',
        borderWidth: 1,
    },
    logoSection: {
        flex: 1,
        width: width,
        alignItems: 'center',
        justifyContent: 'center'
    },
    formSection: {
        flex: 2,
        width: width
    },
    rings: {
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    loginForm: {
        paddingHorizontal: 30,
        paddingVertical: 80
    }
})