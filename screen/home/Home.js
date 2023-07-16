import { SearchBar } from "@rneui/themed"
import { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native"
import CourseCard from "../../components/CategoryCard";
import GlobalStyle from "../../constants/GlobalStyle";

export default function Home() {
    const [search, setSearch] = useState('');
    const handleSearch = (e) => {
        setSearch('hello');
    }
    return (
        <View style={GlobalStyle.screenView}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.menuButton} activeOpacity={0.5}>
                    <Image
                        source={require('./../../assets/images/Frame.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.userIcon} activeOpacity={0.5}>
                    <Image
                        source={require('./../../assets/images/Profile-photo.jpg')}
                        style={styles.ImageIconStyle}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.greetText}>Welcome back </Text>
                <Text style={styles.greetText}>Sharmii !</Text>
                <SearchBar
                    placeholder="Search for new Knowledge!"
                    onChangeText={handleSearch}
                    value={search}
                    clearIcon={false}
                    containerStyle={styles.searchbarContainer}
                    inputContainerStyle={{ flexDirection: 'row-reverse', backgroundColor: 'white', justifyContent: 'space-around' }}
                />
            </View>
            <View style={styles.cardContainer}>
                <CourseCard />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    menuButton: {
        width: '22%',
        height: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 50,
        elevation: 5
    },
    header: {
        height: 120,
        paddingHorizontal: 20,
        paddingTop: 25,
        paddingBottom: 10,
        justifyContent: "space-between",
        flexDirection: 'row',
        alignItems: 'center'
    },
    userIcon: {
        width: '17%',
        height: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        overflow: 'hidden',
        elevation: 3
    },
    ImageIconStyle: {
        width: '100%',
        height: '100%'
    },
    cardContainer: {
        alignItems: 'center',
        paddingTop: 20
    },
    greetText: {
        fontSize: 36,
        color: GlobalStyle.black,
        fontWeight: 600,
    },
    contentContainer: {
        paddingHorizontal: 10
    },
    searchbarContainer: {
        backgroundColor: GlobalStyle.screenView.backgroundColor,
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent'
    }
})