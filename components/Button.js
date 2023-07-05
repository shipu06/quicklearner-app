import { StyleSheet, View, Text, Image } from 'react-native';
export default function Button() {
    return (
        <View style={[styles.buttonWrapper, styles.buttonShadow]}>
            <Text style={styles.buttonText}>Next</Text>
            <View style={styles.vectorContainer}><Image source={require('./../assets/images/Vector.png')} style={styles.vectorImage} /></View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonWrapper: {
        width: 220,
        backgroundColor: '#8518FF',
        flexDirection: 'row',
        height: 60,
        marginTop: 40,
        borderRadius: 70,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    vectorContainer: {
        width: 60,
        height: 40,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30
    },
    vectorImage: {
        // alignContent
        width: 10,
        height: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 18
    },
    buttonShadow: {
        elevation: 10,
        shadowColor: '#8518FF',
    }
})