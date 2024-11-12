import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
        padding: 10,
    },
    headerContainer: {
        borderWidth: 2,
        borderColor: 'black',
        padding: 10,
        marginBottom: 20,
        backgroundColor: 'white',
        borderRadius: 10,

    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    boatContainer: {
        borderWidth: 2,
        borderColor: 'black',
        padding: 10,
        marginBottom: 20,
        backgroundColor: 'white',
        borderRadius: 10,

    },
    boatNameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor:'lightblue',
        borderRadius: 10,
        padding: 5,
    },
    boatName: {
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 10,
    },
    description: {
        fontSize: 16,
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 500,
        marginBottom: 20,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
    },
});

const Boats = ({ name, description, icon_name, poster }) => {
    return (
        <View style={styles.boatContainer}>
            <View style={styles.boatNameContainer}>
                <Icon name={icon_name} size={24} color="#000" />
                <Text style={styles.boatName}>{name}</Text>
            </View>
            <Text style={styles.description}>{description}</Text>
            <Image source={poster} style={styles.image} />
        </View>
    );
};

const AllBoats = () => {
    return (
        <ScrollView contentContainerStyle={{ ...styles.container, flexGrow: 1 }}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>GetABoat - For Sale</Text>
            </View>
            <Boats
                name="SEA RAY 500 SUNDANCER"
                icon_name="sailboat"
                description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
                poster={require('../img/sea_ray.jpg')}
            />
            <Boats
                name="FOUR WINNS HORIZON 180"
                icon_name="sailboat"
                description="A sporty look and refined details truly set the Horizon 180 above all others."
                poster={require('../img/four_winns.jpg')}
            />
            <Boats
                name="FLIPPER 640 ST"
                icon_name="sailboat"
                description="A modern take on the classic, traditional hardtop and perfect for a family picnic."
                poster={require('../img/flipper.jpg')}
            />
            <Boats
                name="PRINCESS V48"
                icon_name="sailboat"
                description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate-controlled interior."
                poster={require('../img/princess.jpg')}
            />
            <Boats
                name="BAYLINER 175 BOWRIDER"
                icon_name="sailboat"
                description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
                poster={require('../img/bayliner.jpg')}
            />
            <Boats
                name="FAIRLINE TARGA 47"
                icon_name="sailboat"
                description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
                poster={require('../img/fairline.jpg')}
            />
        </ScrollView>
    );
};

export default AllBoats;
