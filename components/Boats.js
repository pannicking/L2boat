import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const Boats = ({ name, description, icon_name, poster }) => {
    return (
        <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name={icon_name} size={24} color="#000" />
                <Text style={{ fontWeight: 'bold', fontSize: 18}}>{name}</Text>
            </View>
            <Text>
                {description}
            </Text>
            <Image source={poster} style={{ width: '100%', height: 500, marginBottom: 20}} />
        </View>
    );
};

const AllBoats = () => {
    return (
        <ScrollView>
            <Text style={{ marginBottom: 10 }}>
                GetABoat - For Sale
            </Text>
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
                name="FLIPPER 640 ST"
                icon_name="sailboat"
                description="A modern take on the classic, traditional hardtop and perfect for a family picnic."
                poster={require('../img/flipper.jpg')}
            />
            <Boats
                name="PRINCESS V48"
                icon_name="sailboat"
                description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."
                poster={require('../img/princess.jpg')}
            />
            <Boats
                name="BAYLINER 175 BOWRIDER"
                icon_name="sailboat"
                description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
                poster={require('../img/bayliner.jpg')}
            /><Boats
            name="FAIRLINE TARGA 47"
            icon_name="sailboat"
            description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
            poster={require('../img/fairline.jpg')}
        />
        </ScrollView>
    );
};

export default AllBoats;
