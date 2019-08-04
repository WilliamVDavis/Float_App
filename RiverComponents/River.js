import React, { Component, Fragment } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableOpacity
} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";



class River extends Component {
    constructor() {
        super()
    }

        static navigationOptions = {
            title: "River"
        }

    render() {
        return(
            <Fragment>
                <View>
                    <Text>River Page</Text>
                </View>
            </Fragment>
        )
    }
        

}

export default River;