import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, View } from 'react-native';

export default function SplashScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require('./../assets/images/splash.png')} style={styles.logoImage} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        height: '20%',
        width: '100%',
        backgroundColor: '#B7B1B170',
        borderRadius: 17,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 35
    },
    logoImage: {
        height: 120,
        width: 120
    }
});
