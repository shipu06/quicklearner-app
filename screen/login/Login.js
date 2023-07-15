import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Dimensions } from "react-native";
import { Input, TabView } from '@rneui/themed';
import { Tab } from '@rneui/themed';
import React, { useState } from "react";
import { Button } from '@rneui/themed';
import GlobalStyle from "../../constants/GlobalStyle";
import SplitInput from "../../components/SplitInput";
var width = Dimensions.get('window').width;

export default function Login({ navigation }) {
    const [index, setIndex] = React.useState(0);
    const [secureText, setSecureText] = useState(true);
    const [forgetPassword, setForgetPassword] = useState(true);

    const [otpCode, setOTPCode] = useState("");
    const [isPinReady, setIsPinReady] = useState(false);
    const maximumCodeLength = 4;

    const handleNavigation = () => {
        navigation.navigate('MainScreen')
    }
    const handleTabChange = (value) => {
        index !== value && setIndex(value);
    }

    const handlePasswordState = () => {
        secureText ? setSecureText(false) : setSecureText(true);
    }

    return (
        <SafeAreaView style={styles.loginScreen}>
            <View style={index ? [styles.logoSection, styles.signupLogoSection] : styles.logoSection}>
                <View>
                    <View style={index ? [styles.rings, styles.invisible] : styles.rings}>
                        <Image source={require('./../../assets/images/Ellipse3.png')} style={{ marginBottom: 20 }} />
                        <Image source={require('./../../assets/images/Ellipse2.png')} style={{ marginBottom: 30 }} />
                    </View>
                    <Image source={require('./../../assets/images/logo.png')} />
                    <View style={index ? [styles.rings, styles.invisible] : styles.rings}>
                        <Image source={require('./../../assets/images/Ellipse1.png')} style={{ marginTop: 30 }} />
                        <Image source={require('./../../assets/images/Ellipse4.png')} style={{ marginTop: 20 }} />
                    </View>
                </View>
            </View>
            <View style={index ? [styles.formSection, styles.signupFormSection] : styles.formSection}>
                <>
                    <Tab
                        value={index}
                        onChange={(value) => handleTabChange(value)}
                        indicatorStyle={{
                            backgroundColor: 'black',
                            height: 2,
                            width: '50%'
                        }}
                        style={{ height: 60, borderTopLeftRadius: 30, borderTopRightRadius: 30, overflow: "hidden", backgroundColor: GlobalStyle.primaryColor, }}
                    >
                        <Tab.Item
                            title="LOGIN"
                            titleStyle={(active) => ({
                                fontSize: 18,
                                color: GlobalStyle.regularText,
                                opacity: active ? 1 : 0.3
                            })} />
                        <Tab.Item
                            title="SIGN UP"
                            titleStyle={(active) => ({
                                fontSize: 18,
                                color: GlobalStyle.regularText,
                                opacity: active ? 1 : 0.3
                            })}
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
                                        <Button title='LOGIN' type="solid" buttonStyle={styles.loginButtonStyle} titleStyle={styles.loginButtonTitleStyle} onPress={handleNavigation} />
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
                            <View style={styles.signupFormContainer}>
                                <Input label='Your name' placeholder="Jhon Doe" style={styles.inputFields} />
                                <Input label='Your username' placeholder="jhon1" style={styles.inputFields} />
                                <Input label='Your email' placeholder="xyz1@gmail.com" style={styles.inputFields} />
                                <Input label='Your contact' placeholder="7905*****4" style={styles.inputFields} />
                                <Input placeholder="******" label='Password' secureTextEntry={secureText} style={[styles.password, styles.inputFields]} rightIcon={{ type: 'font-awesome', name: 'eye', onPress: handlePasswordState }} />
                                <Input placeholder="******" label='Confirm Password' secureTextEntry={secureText} style={[styles.password, styles.inputFields]} rightIcon={{ type: 'font-awesome', name: 'eye', onPress: handlePasswordState }} />
                                <Button title='Create Account' type="solid" buttonStyle={styles.loginButtonStyle} titleStyle={styles.loginButtonTitleStyle} />
                            </View>
                        </TabView.Item>

                    </TabView>
                </>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    loginScreen: {
        flex: 1,
        flexDirection: 'column',
        borderWidth: 1,
        paddingTop: 30
    },
    logoSection: {
        flex: 1,
        width: width,
        alignItems: 'center',
        justifyContent: 'center'
    },
    signupLogoSection: {
        flex: 1,
    },
    signupFormSection: {
        flex: 5
    },
    formSection: {
        flex: 2,
        width: width
    },
    rings: {
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    invisible: {
        display: 'none',
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
        borderRadius: 10,
        marginTop: 15
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
    },
    signupFormContainer: {
        rowGap: -20,
        paddingVertical: 40,
        paddingHorizontal: 30,
        justifyContent: 'space-between',
    }
})