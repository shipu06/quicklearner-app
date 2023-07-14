import { StatusBar } from "expo-status-bar";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Dimensions } from "react-native";
import { Input, TabView, Icon } from '@rneui/themed';
import { Tab } from '@rneui/themed';
import React, { useState } from "react";
import { Button } from '@rneui/themed';
import GlobalStyle from "../../constants/GlobalStyle";
import SplitInput from "../../components/SplitInput";
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default function Login() {
    const [index, setIndex] = React.useState(0);
    const [secureText, setSecureText] = useState(true);
    const [forgetPassword, setForgetPassword] = useState(false);

    const [otpCode, setOTPCode] = useState("");
    const [isPinReady, setIsPinReady] = useState(false);
    const maximumCodeLength = 4;


    const handleTabChange = () => {
        index === 0 ? setIndex(1) : setIndex(0);
    }

    const handlePasswordState = () => {
        secureText ? setSecureText(false) : setSecureText(true);
    }

    return (
        <SafeAreaView style={styles.loginScreen}>
            <StatusBar style="light" />
            <View style={styles.statusBarStyling} />
            <View style={styles.logoSection}>
                <View>
                    <View style={styles.rings}>
                        <Image source={require('./../../assets/images/Ellipse3.png')} style={{ marginBottom: 20 }} />
                        <Image source={require('./../../assets/images/Ellipse2.png')} style={{ marginBottom: 30 }} />
                    </View>
                    <Image source={require('./../../assets/images/logo.png')} />
                    <View style={styles.rings}>
                        <Image source={require('./../../assets/images/Ellipse1.png')} style={{ marginTop: 30 }} />
                        <Image source={require('./../../assets/images/Ellipse4.png')} style={{ marginTop: 20 }} />
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
                        style={{ height: 60, borderTopLeftRadius: 30, borderTopRightRadius: 30, overflow: "hidden", backgroundColor: GlobalStyle.primaryColor, }}
                    >
                        <Tab.Item
                            title="LOGIN"
                            titleStyle={{ fontSize: 18, color: GlobalStyle.regularText }}
                        />
                        <Tab.Item
                            title="SIGN Up"
                            titleStyle={{ fontSize: 18, color: GlobalStyle.regularText }}
                        />

                    </Tab>

                    <TabView value={index} onChange={handleTabChange} animationType="spring">
                        <TabView.Item style={{ width: '100%' }}>
                            {
                                forgetPassword ? (
                                    <View style={styles.loginForm}>
                                        <Input
                                            label='Email'
                                            placeholder="xyz1@gmail.com"
                                        />
                                        <Input placeholder="******" label='Password' secureTextEntry={secureText} style={styles.password} rightIcon={{ type: 'font-awesome', name: 'eye', onPress: handlePasswordState }} />
                                        <Text style={styles.forgetPasswordLink}>Forget Password ?</Text>

                                        <Button title='LOGIN' type="solid" buttonStyle={styles.loginButtonStyle} titleStyle={styles.loginButtonTitleStyle} />
                                        <Button title="Create account" type="clear" titleStyle={styles.signupButtonTitleStyle} />

                                    </View>
                                ) : (
                                    <View style={[styles.loginForm, styles.forgetPasswordForm]}>
                                        <Text style={styles.forgetPasswordTitle}>Verification Code</Text>
                                        <Text style={styles.forgetPasswordSubTitle}>Enter the 4 digits code that you received on your e-mail.</Text>
                                        <View style={styles.otpContainer} >
                                            <SplitInput code={otpCode}
                                                setCode={setOTPCode}
                                                maximumLength={maximumCodeLength}
                                                setIsPinReady={setIsPinReady} />
                                        </View>
                                        <Button title='LOGIN' type="solid" buttonStyle={[styles.loginButtonStyle, { width: width * 0.8 }]} titleStyle={styles.loginButtonTitleStyle} />

                                    </View>
                                )
                            }

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
        paddingVertical: 50
    },
    forgetPasswordLink: {
        fontSize: 16,
        fontWeight: 600,
        color: GlobalStyle.primaryColor,
        paddingBottom: 30
    },
    loginButtonStyle: {
        backgroundColor: GlobalStyle.primaryColor,
        height: 60,
        borderRadius: 10
    },
    loginButtonTitleStyle: {
        fontSize: 18,
        fontWeight: 900
    },
    signupButtonTitleStyle: {
        color: GlobalStyle.primaryColor
    },
    forgetPasswordForm: {
        alignItems: 'center',
    },
    forgetPasswordTitle: {
        fontSize: 22,
        fontWeight: 800,
        color: GlobalStyle.black,
    },
    forgetPasswordSubTitle: {
        fontSize: 14,
        fontWeight: 500,
        width: width * 0.65,
        color: GlobalStyle.textGray,
        textAlign: 'center',
        marginVertical: 15
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 60
    },
    otpInputField: {
        width: 55,
        height: 70,
        borderWidth: 1,
        borderColor: GlobalStyle.primaryColor,
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        paddingTop: 20,
        paddingLeft: 20
    }
})