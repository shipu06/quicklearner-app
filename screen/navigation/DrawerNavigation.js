import { Button } from '@rneui/themed';
import { Image, StyleSheet, Text, View } from 'react-native';
import GlobalStyle from '../../constants/GlobalStyle';

export default function DrawerNavigation() {
    return (
        <View style={styles.drawerScreen}>
            <View style={styles.userProfile}>
                <Image source={require('./../../assets/images/Profile-photo.jpg')} style={styles.profileImage} />
                <View>
                    <Text style={styles.username}>Sharmii Mahesh</Text>
                    <Text style={styles.title}>STUDENT</Text>
                </View>
            </View>
            <View style={styles.navigationTabs}>
                <Button type='clear' title='Messages' icon={{
                    name: 'home',
                    type: 'font-awesome',
                    size: 20,
                    color: GlobalStyle.fadeWhite,
                }}
                    buttonStyle={styles.navigationButton}
                    titleStyle={styles.navigationTitle}
                    iconContainerStyle={styles.navigationIcon}
                />
                <View style={styles.indicator}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerScreen: {
        backgroundColor: GlobalStyle.primaryColor,
        flex: 1,
        paddingTop: 35
    },
    profileImage: {
        width: '15%',
        height: '55%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        overflow: 'hidden',
        elevation: 3,
        marginRight: 10
    },
    userProfile: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 25
    },
    navigationTabs: {
        flex: 7,
        alignItems: 'flex-start',
        paddingLeft: 20,
        paddingTop: 60
    },
    username: {
        color: GlobalStyle.fadeWhite,
        fontSize: 22,
        fontWeight: 600
    },
    title: {
        fontSize: 12,
        color: GlobalStyle.fadeWhite,
        fontWeight: 600
    },
    navigationButton: {
        width: 130,
        justifyContent: 'flex-start'
    },
    navigationTitle: {
        color: GlobalStyle.fadeWhite
    },
    navigationIcon: {
        marginRight: 15,
        alignSelf: 'flex-start',
    },
    indicator: {
        borderBottomColor: GlobalStyle.fadeWhite,
        borderBottomWidth: 2,
        width: '60%',
        height: 1,
        position: 'absolute',
        bottom: 10,
        marginHorizontal: '20%'
    }
})