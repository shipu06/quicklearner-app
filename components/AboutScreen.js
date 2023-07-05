import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Button from './Button';

export default function AboutScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('./../assets/images/about-page-image.png')} style={styles.imageStyle} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.headingText}>Learn Code From Your Home</Text>
                <Text style={styles.textContent}>Learning is an essential part of everyone’s life, whether it is for achieving a job or for knowledge’s sake. Online environment is changing constantly and it is a great opportunity for learning.</Text>
                <Button />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 35,
        flexDirection: 'column'
    },
    imageContainer: {
        flex: 7,
    },
    textContainer: {
        flex: 4,
        width: 414,
        padding: 30,
        alignItems: 'center'
    },
    imageStyle: {
        width: 414,
        height: 494
    },
    headingText: {
        fontSize: 32,
        fontWeight: 'bold',
        // fontFamily: 'poppins',
        color: '#343674',
        textAlign: 'center',
        width: 300
    },
    textContent: {
        fontSize: 14,
        color: '#000',
        width: 330,
        textAlign: 'center',
        marginTop: 25,
    }
});
