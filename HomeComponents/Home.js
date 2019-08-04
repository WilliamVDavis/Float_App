import React, { Component, Fragment } from 'react';
import {
    Image,
    StatusBar,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableWithoutFeedback,
    TouchableOpacity
} from "react-native";
import { createStackNavigator, createAppContainer }  from "react-navigation";
// import Carousel from '../Carousel';

class Home extends Component {
    constructor() {
        super()
    }

    static navigationOptions = {
        title: "Home"
    }

    render() {
        return (
            <Fragment>
                <View>
                    <Text>Home Page</Text>
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("River") }>
                    <View>
                        <Text>To River Page</Text>
                    </View>
                </TouchableOpacity>
            </Fragment>
        )
    }
}

export default Home;