import { Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import GlobalStyle from './../constants/GlobalStyle';


export default function CategoryCard() {
    return (
        <TouchableOpacity style={styles.cardContainer}>
            <View style={styles.contentContainer}>
                <Text style={styles.cardTitle}>Courses</Text>
                <Button radius={'sm'} type="solid" buttonStyle={styles.buttonStyle} titleStyle={styles.titleStyle} iconContainerStyle={styles.iconStyle}>
                    Categories
                    <Icon name="arrow-right" color="white" style={styles.iconStyle} />
                </Button>
            </View>
            <Image source={require('./../assets/images/Saly-17.png')} style={styles.cardImage} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: '90%',
        height: 100,
        borderWidth: 1,
        borderColor: 'red',
        flexDirection: 'row',
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: '#260944'
    },
    contentContainer: {
        width: '55%',
        paddingHorizontal: 20,
        justifyContent: 'space-around',
        paddingTop: 5
    },
    cardImage: {
        width: '45%',
        marginTop: 11
    },
    cardTitle: {
        color: 'white',
        fontSize: 24,
        fontWeight: 700
    },
    buttonStyle: {
        backgroundColor: GlobalStyle.bgWhite
    },
    titleStyle: {
        color: GlobalStyle.primaryColor
    },
    iconStyle: {
        color: GlobalStyle.primaryColor,
        marginLeft: 10
    }
})