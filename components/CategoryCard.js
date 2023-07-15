import { Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function CategoryCard() {
    return (
        <TouchableOpacity style={styles.cardContainer}>
            <View style={styles.contentContainer}>
                <Text>Courses</Text>
                <Button radius={'sm'} type="solid">
                    Save
                    <Icon name="arrow-right" color="white" />
                </Button>
            </View>
            <Image source={require('./../assets/images/Saly-17.jpg')} style={styles.cardImage} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: '90%',
        height: 90,
        borderWidth: 1,
        borderColor: 'red',
        flexDirection: 'row',
        borderRadius: 5,
        overflow: 'hidden'
    },
    contentContainer: {
        width: '50%'
    },
    cardImage: {
        width: '50%'
    }
})