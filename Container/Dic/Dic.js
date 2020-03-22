import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';



export default class Dic extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {

    }



    render() {

        return (
            <View style={{ flex: 1, paddingTop: 20 }}>
                <ScrollView>
                    <Text>Test</Text>
                </ScrollView>

            </View>
        );
    }
}